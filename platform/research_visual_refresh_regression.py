from __future__ import annotations

import json
import os
from pathlib import Path

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

BASE_URL = os.environ.get("BASE_URL", "http://127.0.0.1:4179").rstrip("/")
RESULT_PATH = Path(os.environ.get("VISUAL_REFRESH_RESULT", "ci-research-visual/result.json"))
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
    "--window-size=1600,1200",
]:
    options.add_argument(argument)

options.set_capability("goog:loggingPrefs", {"browser": "ALL"})
driver = webdriver.Chrome(options=options)
driver.set_page_load_timeout(45)
wait = WebDriverWait(driver, 40)


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
        "return Boolean(window.KernelResearchVisualRefresh && "
        "window.KernelResearchVisualRefresh.diagnostics().preloaded === 9);"
    ))
    diagnostics = driver.execute_script("return window.KernelResearchVisualRefresh.diagnostics()")
    record("La capa de actualización visual está activa", diagnostics.get("styleInstalled") is True, str(diagnostics))
    record("Se precargan las nueve fotografías nuevas", diagnostics.get("preloaded") == 9, str(diagnostics))

    driver.execute_script("location.hash='#/equipment'")
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-kernel-platform-page="team-nine"]')))
    wait.until(lambda current: len(current.find_elements(By.CSS_SELECTOR, ".kernel-team-core__card")) == 9)
    wait.until(lambda current: current.execute_script(
        "return [...document.querySelectorAll('.kernel-team-core__photo img')].length===9 && "
        "[...document.querySelectorAll('.kernel-team-core__photo img')].every(img => img.complete && img.naturalWidth > 0);"
    ))
    image_sources = driver.execute_script(
        "return [...document.querySelectorAll('.kernel-team-core__photo img')].map(img => img.src);"
    )
    record("Equipo conserva nueve investigadores", len(image_sources) == 9, f"fotos={len(image_sources)}")
    record(
        "Las nueve tarjetas usan las fotografías nuevas",
        len(image_sources) == 9 and all("/assets/img/researchers-20260726/" in source for source in image_sources),
        json.dumps(image_sources, ensure_ascii=False),
    )
    record("Las nueve fotografías son diferentes", len(set(image_sources)) == 9)

    driver.execute_script("location.hash='#/proyectos'")
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

    driver.execute_script("location.hash='#/publicaciones'")
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-kernel-platform-page="publications-2"]')))
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, ".kernel-publication-card")))
    publication_measurements = {
        "title": style_number(".kernel-publication-card h2", "fontSize"),
        "authors": style_number(".kernel-publication-authors", "fontSize"),
        "journal": style_number(".kernel-publication-journal", "fontSize"),
    }
    record("Títulos de publicaciones son legibles", publication_measurements["title"] >= 17.0, str(publication_measurements))
    record("Autores y revistas son legibles", publication_measurements["authors"] >= 14.0 and publication_measurements["journal"] >= 14.0, str(publication_measurements))

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

print(f"\nRESEARCH VISUAL REFRESH RESULT: {'PASS' if not failures else 'FAIL'}")
for failure in failures:
    print(f"- {failure}")
raise SystemExit(1 if failures else 0)
