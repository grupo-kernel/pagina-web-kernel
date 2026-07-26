from __future__ import annotations

import json
import os
import time
from pathlib import Path

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

BASE_URL = os.environ.get("BASE_URL", "http://127.0.0.1:4177").rstrip("/")
RESULT_PATH = Path(os.environ.get("TEAM_PROFILE_RESULT", "ci-team-profile/result.json"))
RESULT_PATH.parent.mkdir(parents=True, exist_ok=True)

checks: list[str] = []
failures: list[str] = []


def record(name: str, condition: bool, detail: str = "") -> None:
    if condition:
        checks.append(name)
        print(f"PASS: {name}{' — ' + detail if detail else ''}")
    else:
        message = f"{name}{' — ' + detail if detail else ''}"
        failures.append(message)
        print(f"FAIL: {message}")


options = Options()
for argument in [
    "--headless=new",
    "--no-sandbox",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--window-size=1440,1100",
]:
    options.add_argument(argument)

options.set_capability("goog:loggingPrefs", {"browser": "ALL"})
driver = webdriver.Chrome(options=options)
driver.set_page_load_timeout(45)
wait = WebDriverWait(driver, 35)


def style_number(selector: str, property_name: str) -> float:
    return float(driver.execute_script(
        "const element=document.querySelector(arguments[0]);"
        "if(!element) return 0;"
        "return parseFloat(getComputedStyle(element)[arguments[1]]) || 0;",
        selector,
        property_name,
    ))


try:
    driver.get(f"{BASE_URL}/#/home")
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-kernel-platform-page="home-2b"]')))
    wait.until(lambda current: current.execute_script(
        "return Boolean(window.KernelTeamProfileFix && window.KernelTeamProfileFix.diagnostics().preloaded >= 9)"
    ))
    diagnostics = driver.execute_script("return window.KernelTeamProfileFix.diagnostics()")
    record("Las nueve fotografías se precargan", diagnostics.get("preloaded", 0) >= 9, str(diagnostics))

    visual_refresh = driver.execute_script(
        "return window.KernelResearchVisualRefresh ? window.KernelResearchVisualRefresh.diagnostics() : null;"
    )
    record(
        "La actualización visual de Investigación está activa",
        bool(visual_refresh) and visual_refresh.get("photos") == 9 and visual_refresh.get("styleInstalled") is True,
        str(visual_refresh),
    )

    start = time.monotonic()
    driver.execute_script("location.hash='#/equipment'")
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-kernel-platform-page="team-nine"]')))
    wait.until(lambda current: len(current.find_elements(By.CSS_SELECTOR, ".kernel-team-core__card")) == 9)
    wait.until(lambda current: current.execute_script(
        "return [...document.querySelectorAll('.kernel-team-core__photo img')].length===9 && "
        "[...document.querySelectorAll('.kernel-team-core__photo img')].every(img => img.complete && img.naturalWidth > 0);"
    ))
    wait.until(lambda current: current.execute_script(
        "return Boolean(window.KernelNameDegreeFix && document.querySelectorAll('.kernel-degree-inline').length >= 9)"
    ))
    elapsed = time.monotonic() - start
    record("Equipo muestra nueve tarjetas", len(driver.find_elements(By.CSS_SELECTOR, ".kernel-team-core__card")) == 9)
    record("Las nueve fotografías cargan correctamente", True, f"tiempo={elapsed:.2f}s")
    record("Carga de fotografías sin demora prolongada", elapsed < 4.0, f"tiempo={elapsed:.2f}s")

    image_sources = driver.execute_script(
        "return [...document.querySelectorAll('.kernel-team-core__photo img')].map(img => img.src);"
    )
    record(
        "Las nueve tarjetas usan las fotografías nuevas",
        len(image_sources) == 9 and all("/assets/img/researchers-20260726/" in source for source in image_sources),
        json.dumps(image_sources, ensure_ascii=False),
    )
    record("Las nueve fotografías nuevas son diferentes", len(set(image_sources)) == 9)

    jose_card_text = driver.execute_script(
        "const button=document.querySelector('[data-kernel-team-open=\"jose-alberto-reyes\"]');"
        "return button?.closest('article')?.querySelector('h2')?.textContent?.trim() || '';"
    )
    record("Jose aparece sin acento", "Jose Alberto Reyes Reyes" in jose_card_text and "José" not in jose_card_text, jose_card_text)
    record("Jose aparece como Ph.D.", jose_card_text.endswith("Ph.D."), jose_card_text)

    degree_metrics = driver.execute_script(
        "return [...document.querySelectorAll('.kernel-team-core__card h2 .kernel-degree-inline')].map(degree => ({"
        " degree: degree.textContent.trim(),"
        " degreeSize: parseFloat(getComputedStyle(degree).fontSize),"
        " headingSize: parseFloat(getComputedStyle(degree.parentElement).fontSize),"
        " degreeWeight: getComputedStyle(degree).fontWeight,"
        " headingWeight: getComputedStyle(degree.parentElement).fontWeight"
        "}));"
    )
    record("Las nueve tarjetas integran el grado en el nombre", len(degree_metrics) == 9, str(degree_metrics))
    record(
        "Ph.D. y M.Sc. usan el mismo tamaño que el nombre",
        bool(degree_metrics) and all(abs(item["degreeSize"] - item["headingSize"]) < 0.2 for item in degree_metrics),
        str(degree_metrics),
    )
    record(
        "Ph.D. y M.Sc. usan el mismo peso que el nombre",
        bool(degree_metrics) and all(item["degreeWeight"] == item["headingWeight"] for item in degree_metrics),
        str(degree_metrics),
    )

    role_size = style_number(".kernel-team-core__role", "fontSize")
    role_weight = style_number(".kernel-team-core__role", "fontWeight")
    record("Funciones de investigadores con tamaño legible", role_size >= 14.0, f"font-size={role_size:.1f}px")
    record("Funciones de investigadores reforzadas", role_weight >= 700, f"font-weight={role_weight:.0f}")

    profile_ids = driver.execute_script(
        "return [...document.querySelectorAll('[data-kernel-team-open]')].map(button => button.dataset.kernelTeamOpen);"
    )
    record("Hay nueve botones de perfil", len(profile_ids) == 9, f"botones={len(profile_ids)}")

    for index, profile_id in enumerate(profile_ids):
        selector = f'[data-kernel-team-open="{profile_id}"]'
        wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, selector)))
        expected_name = driver.execute_script(
            "const button=document.querySelector(arguments[0]);"
            "return button?.closest('article')?.querySelector('h2')?.textContent?.trim() || '';",
            selector,
        )
        driver.execute_script(
            "const button=document.querySelector(arguments[0]); if(button) button.click();",
            selector,
        )
        panel_selector = f'[data-kernel-profile-panel="{profile_id}"]'
        wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, panel_selector)))
        wait.until(lambda current: current.execute_script(
            "const small=document.querySelector(arguments[0] + ' h2 small');"
            "return !small || Math.abs(parseFloat(getComputedStyle(small).fontSize)-parseFloat(getComputedStyle(small.parentElement).fontSize)) < 0.2;",
            panel_selector,
        ))
        detail_name = driver.execute_script(
            "return document.querySelector(arguments[0])?.querySelector('h2')?.textContent?.trim() || '';",
            panel_selector,
        )
        current_url = driver.current_url
        record(
            f"Perfil abre: {profile_id}",
            profile_id in current_url and "#/equipment" in current_url and expected_name in detail_name,
            current_url,
        )
        record(
            f"El perfil no redirige a Portada: {profile_id}",
            driver.execute_script("return location.hash") == "#/equipment",
        )

        if profile_id == "jose-alberto-reyes":
            record("Perfil de Jose conserva nombre sin acento", "Jose Alberto Reyes Reyes" in detail_name and "José" not in detail_name, detail_name)
            record("Perfil de Jose conserva Ph.D.", detail_name.endswith("Ph.D."), detail_name)
            jose_formation = driver.execute_script(
                "return [...document.querySelectorAll(arguments[0] + ' li')].map(li => li.textContent.trim()).join(' | ');",
                panel_selector,
            )
            record("Perfil de Jose no indica doctorado en curso", "en curso" not in jose_formation.lower(), jose_formation)

        if index == 0:
            detail_size = style_number("[data-kernel-profile-panel] .kernel-team-core__detail-role", "fontSize")
            list_size = style_number("[data-kernel-profile-panel] .kernel-team-core__section li", "fontSize")
            record("Descripción del perfil con tamaño legible", detail_size >= 15.0, f"font-size={detail_size:.1f}px")
            record("Contenido del perfil con tamaño legible", list_size >= 14.0, f"font-size={list_size:.1f}px")

        profile_degree_sizes = driver.execute_script(
            "const small=document.querySelector(arguments[0] + ' h2 small');"
            "if(!small) return null;"
            "return {degree:parseFloat(getComputedStyle(small).fontSize),heading:parseFloat(getComputedStyle(small.parentElement).fontSize)};",
            panel_selector,
        )
        if profile_degree_sizes:
            record(
                f"Grado al mismo tamaño en perfil: {profile_id}",
                abs(profile_degree_sizes["degree"] - profile_degree_sizes["heading"]) < 0.2,
                str(profile_degree_sizes),
            )

        driver.execute_script(
            "const back=document.querySelector('[data-kernel-team-profile-back]'); if(back) back.click();"
        )
        wait.until(lambda current: not current.find_elements(By.CSS_SELECTOR, "[data-kernel-profile-panel]"))
        wait.until(lambda current: "kernelProfile" not in current.current_url)
        record(
            f"Botón Volver funciona: {profile_id}",
            driver.execute_script("return location.hash") == "#/equipment" and len(driver.find_elements(By.CSS_SELECTOR, ".kernel-team-core__card")) == 9,
        )

    driver.get(f"{BASE_URL}/#/proyectos")
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-kernel-platform-page="projects-2"]')))
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, ".kernel-project-card")))

    project_measurements = {
        "metric_label": style_number(".kernel-research-stat span", "fontSize"),
        "filter_label": style_number(".kernel-research-filters label", "fontSize"),
        "filter_input": style_number(".kernel-research-filters input", "fontSize"),
        "project_title": style_number(".kernel-project-card h2", "fontSize"),
        "project_detail": style_number(".kernel-project-detail", "fontSize"),
        "counting_note": style_number(".kernel-project-note", "fontSize"),
        "profile_link": style_number(".kernel-project-people a", "fontSize"),
    }
    record("Etiquetas métricas de Proyectos son legibles", project_measurements["metric_label"] >= 13.5, str(project_measurements))
    record("Filtros de Proyectos son legibles", project_measurements["filter_label"] >= 13.5 and project_measurements["filter_input"] >= 14.0, str(project_measurements))
    record("Títulos de proyectos tienen tamaño reforzado", project_measurements["project_title"] >= 17.0, str(project_measurements))
    record("Detalles de proyectos tienen tamaño reforzado", project_measurements["project_detail"] >= 13.8, str(project_measurements))
    record("Nota de conteo tiene tamaño reforzado", project_measurements["counting_note"] >= 14.0, str(project_measurements))
    record("Enlaces de investigadores son legibles", project_measurements["profile_link"] >= 12.5, str(project_measurements))

    driver.get(f"{BASE_URL}/#/publicaciones")
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-kernel-platform-page="publications-2"]')))
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, ".kernel-publication-card")))

    publication_title_size = style_number(".kernel-publication-card h2", "fontSize")
    publication_title_weight = style_number(".kernel-publication-card h2", "fontWeight")
    publication_authors_size = style_number(".kernel-publication-authors", "fontSize")
    publication_authors_weight = style_number(".kernel-publication-authors", "fontWeight")
    publication_journal_size = style_number(".kernel-publication-journal", "fontSize")
    publication_journal_weight = style_number(".kernel-publication-journal", "fontWeight")
    record("Títulos de publicaciones con tamaño legible", publication_title_size >= 17.0, f"font-size={publication_title_size:.1f}px")
    record("Títulos de publicaciones en negrita", publication_title_weight >= 800, f"font-weight={publication_title_weight:.0f}")
    record("Autores de publicaciones con tamaño legible", publication_authors_size >= 14.0, f"font-size={publication_authors_size:.1f}px")
    record("Autores de publicaciones reforzados", publication_authors_weight >= 700, f"font-weight={publication_authors_weight:.0f}")
    record("Revistas de publicaciones con tamaño legible", publication_journal_size >= 14.0, f"font-size={publication_journal_size:.1f}px")
    record("Revistas de publicaciones reforzadas", publication_journal_weight >= 800, f"font-weight={publication_journal_weight:.0f}")

    severe = [
        entry for entry in driver.get_log("browser")
        if entry.get("level") == "SEVERE" and "favicon" not in entry.get("message", "").lower()
    ]
    record("Sin errores graves de JavaScript", not severe, json.dumps(severe, ensure_ascii=False))
except Exception as error:  # noqa: BLE001
    failures.append(f"Excepción de prueba: {type(error).__name__}: {error}")
finally:
    RESULT_PATH.write_text(
        json.dumps(
            {"base_url": BASE_URL, "passed": not failures, "checks": checks, "failures": failures},
            ensure_ascii=False,
            indent=2,
        ) + "\n",
        encoding="utf-8",
    )
    driver.quit()

print(f"\nTEAM PROFILE, PORTRAITS AND RESEARCH READABILITY RESULT: {'PASS' if not failures else 'FAIL'}")
for failure in failures:
    print(f"- {failure}")
raise SystemExit(1 if failures else 0)
