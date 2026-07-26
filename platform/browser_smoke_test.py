from __future__ import annotations

import json
import os
import sys
import time
from pathlib import Path

from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

BASE_URL = os.environ.get("BASE_URL", "http://127.0.0.1:4174").rstrip("/")
RESULT_PATH = Path(os.environ.get("BROWSER_RESULT", "ci-browser/browser-smoke-result.json"))
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


def visible_text(driver: webdriver.Chrome) -> str:
    return driver.find_element(By.TAG_NAME, "body").text


options = Options()
for argument in [
    "--headless=new",
    "--no-sandbox",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--disable-background-networking",
    "--disable-component-update",
    "--disable-default-apps",
    "--disable-extensions",
    "--disable-sync",
    "--metrics-recording-only",
    "--no-first-run",
    "--no-default-browser-check",
    "--window-size=1440,1100",
]:
    options.add_argument(argument)
options.set_capability("goog:loggingPrefs", {"browser": "ALL"})

driver = webdriver.Chrome(options=options)
driver.set_page_load_timeout(45)
wait = WebDriverWait(driver, 30)


def open_route(route: str) -> None:
    driver.get(f"{BASE_URL}/#/{route}")
    wait.until(lambda current: current.execute_script("return document.readyState") == "complete")


def wait_id(element_id: str):
    return wait.until(EC.presence_of_element_located((By.ID, element_id)))


def js_click(element) -> None:
    driver.execute_script("arguments[0].scrollIntoView({block:'center'}); arguments[0].click();", element)


try:
    # La plataforma completa y los menús principales deben seguir presentes.
    open_route("home")
    wait.until(EC.presence_of_element_located((By.ID, "navBar")))
    record("Navegación principal", driver.find_element(By.ID, "navBar").is_displayed())
    record("Menú Nosotros", bool(driver.find_elements(By.ID, "submenu-nosotros")))
    record("Menú Investigación", bool(driver.find_elements(By.ID, "submenu-investigacion")))
    record("Selector de idioma", bool(driver.find_elements(By.ID, "kernel-language-switch")))

    # ITLA · Xmera: prueba real con datos ficticios, sin enviar información externa.
    open_route("herramientas")
    xmera_input = wait_id("xmera-input")
    xmera_input.clear()
    xmera_input.send_keys("20250893 18 4\n20212267 13 5")
    js_click(wait_id("xmera-generate"))
    wait.until(lambda current: '"20250893":[18,4]' in current.find_element(By.ID, "xmera-output").text)
    xmera_output = driver.find_element(By.ID, "xmera-output").text
    record("Xmera genera el código", '"20250893":[18,4]' in xmera_output and '"20212267":[13,5]' in xmera_output)
    record("Xmera habilita copiar", not driver.find_element(By.ID, "xmera-copy").get_attribute("disabled"))
    js_click(wait_id("xmera-clear"))
    wait.until(lambda current: current.find_element(By.ID, "xmera-input").get_attribute("value") == "")
    record("Xmera limpia los datos", driver.find_element(By.ID, "xmera-input").get_attribute("value") == "")

    # UNAPEC/APEC · Banner: 1AC, 2PP, 3SP y 4EF con datos ficticios.
    js_click(wait_id("tab-banner"))
    first_period = wait_id("open-primer-periodo")
    js_click(first_period)
    first_input = wait_id("banner-primer-input")
    first_input.send_keys("A00108671 8 2\nA00122336 9 19")
    js_click(wait_id("banner-primer-process"))
    wait.until(lambda current: "2 estudiantes" in current.find_element(By.ID, "banner-primer-count").text)
    record("Banner procesa 1AC y 2PP", "A00108671" in driver.find_element(By.ID, "banner-primer-preview").text)
    record("Banner habilita descarga 1AC", not driver.find_element(By.ID, "banner-primer-download-1ac").get_attribute("disabled"))
    record("Banner habilita descarga 2PP", not driver.find_element(By.ID, "banner-primer-download-2pp").get_attribute("disabled"))

    js_click(wait_id("banner-back"))
    js_click(wait_id("open-segundo-periodo"))
    second_input = wait_id("banner-segundo-input")
    second_input.send_keys("A00108671 28\nA00122336 32")
    js_click(wait_id("banner-segundo-process"))
    wait.until(lambda current: "2 estudiantes" in current.find_element(By.ID, "banner-segundo-count").text)
    record("Banner procesa 3SP", "A00108671" in driver.find_element(By.ID, "banner-segundo-preview").text)
    record("Banner habilita descarga 3SP", not driver.find_element(By.ID, "banner-segundo-download").get_attribute("disabled"))

    js_click(wait_id("banner-back"))
    js_click(wait_id("open-calificacion-final"))
    final_input = wait_id("banner-final-input")
    final_input.send_keys("A00108671 24\nA00122336 28")
    js_click(wait_id("banner-final-process"))
    wait.until(lambda current: "2 estudiantes" in current.find_element(By.ID, "banner-final-count").text)
    record("Banner procesa 4EF", "A00108671" in driver.find_element(By.ID, "banner-final-preview").text)
    record("Banner habilita descarga 4EF", not driver.find_element(By.ID, "banner-final-download").get_attribute("disabled"))

    # Laboratorio: debe preservar el control de acceso y no se intenta autenticar.
    open_route("laboratorioKernel")
    wait.until(lambda current: any(token in visible_text(current) for token in ["Laboratorio", "Iniciar sesión", "Acceso", "Authentication", "Sign in"]))
    laboratory_text = visible_text(driver)
    record("Laboratorio Inteligente accesible", "Laboratorio" in laboratory_text)
    record("Control de acceso del Laboratorio", any(token in laboratory_text for token in ["Iniciar sesión", "Acceso", "Authentication", "Sign in"]))

    # Equipo y fotografías.
    open_route("equipment")
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-kernel-platform-page="team-nine"]')))
    cards = driver.find_elements(By.CSS_SELECTOR, ".kernel-team-core__card")
    photos = driver.find_elements(By.CSS_SELECTOR, ".kernel-team-core__photo img")
    record("Equipo de nueve investigadores", len(cards) == 9, f"tarjetas={len(cards)}")
    record("Fotografías del equipo", len(photos) == 9, f"fotografías={len(photos)}")
    record("Fotografía actualizada de Miguel referenciada", any("miguel.jpg" in (photo.get_attribute("src") or "") for photo in photos))

    # Formación académica integrada dentro de Nosotros.
    open_route("quienesSomos/formacion")
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-kernel-platform-page="academic-background"]')))
    academic_buttons = driver.find_elements(By.CSS_SELECTOR, "[data-kernel-academic-select]")
    record("Formación académica de nueve investigadores", len(academic_buttons) == 9, f"perfiles={len(academic_buttons)}")
    alicia_button = next((button for button in academic_buttons if button.get_attribute("data-kernel-academic-select") == "alicia-cordero"), None)
    record("Alicia disponible en Formación", alicia_button is not None)
    if alicia_button:
        js_click(alicia_button)
        wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-kernel-researcher="alicia-cordero"]')))
        record("Perfil académico de Alicia abre", True)

    # Publicaciones 2.0.
    open_route("publicaciones")
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-kernel-platform-page="publications-2"]')))
    publication_text = visible_text(driver)
    record("Publicaciones 2.0 muestra 162 registros", "162" in publication_text)
    record("Publicaciones 2.0 tiene filtros", bool(driver.find_elements(By.ID, "kernel-pub-search")))
    record("Publicaciones 2.0 muestra DOI", "DOI" in publication_text)

    # Proyectos 2.0.
    open_route("proyectos")
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-kernel-platform-page="projects-2"]')))
    projects_text = visible_text(driver)
    record("Proyectos 2.0 muestra diez destacados", "10" in projects_text)
    record("Proyectos 2.0 muestra 48 participaciones adicionales", "48" in projects_text)
    record("Proyectos 2.0 tiene filtros", bool(driver.find_elements(By.ID, "kernel-project-search")))

except TimeoutException as error:
    failures.append(f"Tiempo de espera agotado: {error}")
except Exception as error:  # noqa: BLE001
    failures.append(f"Excepción de navegador: {type(error).__name__}: {error}")
finally:
    try:
        browser_logs = driver.get_log("browser")
    except Exception:  # noqa: BLE001
        browser_logs = []
    driver.quit()

result = {
    "base_url": BASE_URL,
    "passed": not failures,
    "checks": checks,
    "failures": failures,
    "browser_logs": browser_logs,
}
RESULT_PATH.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")

print(f"\nBROWSER SMOKE RESULT: {'PASS' if not failures else 'FAIL'}")
for failure in failures:
    print(f"- {failure}")
sys.exit(1 if failures else 0)
