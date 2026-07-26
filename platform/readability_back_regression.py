from __future__ import annotations

import json
import os
from pathlib import Path

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

BASE_URL = os.environ.get("BASE_URL", "http://127.0.0.1:4177").rstrip("/")
RESULT_PATH = Path(os.environ.get("READABILITY_RESULT", "ci-readability/result.json"))
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


def px(selector: str, property_name: str) -> float:
    return float(driver.execute_script(
        "const element=document.querySelector(arguments[0]);"
        "if(!element) return 0;"
        "return parseFloat(getComputedStyle(element)[arguments[1]]) || 0;",
        selector,
        property_name,
    ))


try:
    driver.get(f"{BASE_URL}/#/equipment")
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-kernel-platform-page="team-nine"]')))
    wait.until(lambda current: len(current.find_elements(By.CSS_SELECTOR, ".kernel-team-core__card")) == 9)

    record("Cuadrícula inicial de nueve investigadores", len(driver.find_elements(By.CSS_SELECTOR, ".kernel-team-core__card")) == 9)
    record("Texto de función del investigador legible", px(".kernel-team-core__role", "fontSize") >= 14.0, f"font-size={px('.kernel-team-core__role', 'fontSize'):.1f}px")
    record("Texto de función del investigador reforzado", px(".kernel-team-core__role", "fontWeight") >= 700, f"font-weight={px('.kernel-team-core__role', 'fontWeight'):.0f}")

    open_button = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '[data-kernel-team-open="alicia-cordero"]')))
    driver.execute_script("arguments[0].click();", open_button)
    panel = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-kernel-profile-panel="alicia-cordero"]')))

    record("Perfil de Alicia abre dentro de Equipo", "kernelProfile=alicia-cordero" in driver.current_url and driver.execute_script("return location.hash") == "#/equipment")
    record("Texto del perfil completo legible", px("[data-kernel-profile-panel] .kernel-team-core__detail-role", "fontSize") >= 15.0, f"font-size={px('[data-kernel-profile-panel] .kernel-team-core__detail-role', 'fontSize'):.1f}px")
    record("Listas del perfil legibles", px("[data-kernel-profile-panel] .kernel-team-core__section li", "fontSize") >= 14.0, f"font-size={px('[data-kernel-profile-panel] .kernel-team-core__section li', 'fontSize'):.1f}px")

    back_button = panel.find_element(By.CSS_SELECTOR, "[data-kernel-team-profile-back]")
    driver.execute_script("arguments[0].click();", back_button)
    wait.until(EC.invisibility_of_element_located((By.CSS_SELECTOR, "[data-kernel-profile-panel]")))
    wait.until(lambda current: "kernelProfile" not in current.current_url)

    record("Botón Volver elimina el perfil", not driver.find_elements(By.CSS_SELECTOR, "[data-kernel-profile-panel]"))
    record("Botón Volver conserva la ruta Equipo", driver.execute_script("return location.hash") == "#/equipment")
    record("Botón Volver conserva nueve investigadores", len(driver.find_elements(By.CSS_SELECTOR, ".kernel-team-core__card")) == 9)

    driver.get(f"{BASE_URL}/#/publicaciones")
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-kernel-platform-page="publications-2"]')))
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, ".kernel-publication-card")))

    record("Título de publicación legible", px(".kernel-publication-card h2", "fontSize") >= 16.0, f"font-size={px('.kernel-publication-card h2', 'fontSize'):.1f}px")
    record("Título de publicación en negrita", px(".kernel-publication-card h2", "fontWeight") >= 800, f"font-weight={px('.kernel-publication-card h2', 'fontWeight'):.0f}")
    record("Autores de publicación reforzados", px(".kernel-publication-authors", "fontWeight") >= 700, f"font-weight={px('.kernel-publication-authors', 'fontWeight'):.0f}")
    record("Revista de publicación reforzada", px(".kernel-publication-journal", "fontWeight") >= 800, f"font-weight={px('.kernel-publication-journal', 'fontWeight'):.0f}")

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

print(f"\nREADABILITY AND BACK RESULT: {'PASS' if not failures else 'FAIL'}")
for failure in failures:
    print(f"- {failure}")
raise SystemExit(1 if failures else 0)
