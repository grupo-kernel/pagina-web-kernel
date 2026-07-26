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

    start = time.monotonic()
    driver.execute_script("location.hash='#/equipment'")
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-kernel-platform-page="team-nine"]')))
    wait.until(lambda current: len(current.find_elements(By.CSS_SELECTOR, ".kernel-team-core__card")) == 9)
    wait.until(lambda current: current.execute_script(
        "return [...document.querySelectorAll('.kernel-team-core__photo img')].length===9 && "
        "[...document.querySelectorAll('.kernel-team-core__photo img')].every(img => img.complete && img.naturalWidth > 0);"
    ))
    elapsed = time.monotonic() - start
    record("Equipo muestra nueve tarjetas", len(driver.find_elements(By.CSS_SELECTOR, ".kernel-team-core__card")) == 9)
    record("Las nueve fotografías cargan correctamente", True, f"tiempo={elapsed:.2f}s")
    record("Carga de fotografías sin demora prolongada", elapsed < 4.0, f"tiempo={elapsed:.2f}s")

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

        if index == 0:
            detail_size = style_number("[data-kernel-profile-panel] .kernel-team-core__detail-role", "fontSize")
            list_size = style_number("[data-kernel-profile-panel] .kernel-team-core__section li", "fontSize")
            record("Descripción del perfil con tamaño legible", detail_size >= 15.0, f"font-size={detail_size:.1f}px")
            record("Contenido del perfil con tamaño legible", list_size >= 14.0, f"font-size={list_size:.1f}px")

        driver.execute_script(
            "const back=document.querySelector('[data-kernel-team-profile-back]'); if(back) back.click();"
        )
        wait.until(lambda current: not current.find_elements(By.CSS_SELECTOR, "[data-kernel-profile-panel]"))
        wait.until(lambda current: "kernelProfile" not in current.current_url)
        record(
            f"Botón Volver funciona: {profile_id}",
            driver.execute_script("return location.hash") == "#/equipment" and len(driver.find_elements(By.CSS_SELECTOR, ".kernel-team-core__card")) == 9,
        )

    driver.get(f"{BASE_URL}/#/publicaciones")
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-kernel-platform-page="publications-2"]')))
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, ".kernel-publication-card")))

    publication_title_size = style_number(".kernel-publication-card h2", "fontSize")
    publication_title_weight = style_number(".kernel-publication-card h2", "fontWeight")
    publication_authors_weight = style_number(".kernel-publication-authors", "fontWeight")
    publication_journal_weight = style_number(".kernel-publication-journal", "fontWeight")
    record("Títulos de publicaciones con tamaño legible", publication_title_size >= 16.0, f"font-size={publication_title_size:.1f}px")
    record("Títulos de publicaciones en negrita", publication_title_weight >= 800, f"font-weight={publication_title_weight:.0f}")
    record("Autores de publicaciones reforzados", publication_authors_weight >= 700, f"font-weight={publication_authors_weight:.0f}")
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

print(f"\nTEAM PROFILE AND READABILITY RESULT: {'PASS' if not failures else 'FAIL'}")
for failure in failures:
    print(f"- {failure}")
raise SystemExit(1 if failures else 0)
