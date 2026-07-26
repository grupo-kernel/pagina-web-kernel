from __future__ import annotations

import json
import os
import shutil
import sys
import time
from pathlib import Path

from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

BASE_URL = os.environ.get("BASE_URL", "http://127.0.0.1:4174").rstrip("/")
RESULT_PATH = Path(os.environ.get("BROWSER_RESULT", "ci-browser/browser-smoke-result-v2.json"))
RESULT_PATH.parent.mkdir(parents=True, exist_ok=True)

checks: list[str] = []
failures: list[str] = []


def report(name: str, passed: bool, detail: str = "") -> None:
    message = f"{name}{' — ' + detail if detail else ''}"
    if passed:
        checks.append(message)
        print(f"PASS: {message}", flush=True)
    else:
        failures.append(message)
        print(f"FAIL: {message}", flush=True)


def body_text(driver: webdriver.Chrome) -> str:
    return driver.find_element(By.TAG_NAME, "body").text


options = Options()
options.page_load_strategy = "eager"
for argument in (
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
):
    options.add_argument(argument)
options.set_capability("goog:loggingPrefs", {"browser": "ALL"})

driver_path = shutil.which("chromedriver")
service = Service(executable_path=driver_path) if driver_path else Service()
print(f"ChromeDriver: {driver_path or 'Selenium Manager'}", flush=True)
driver = webdriver.Chrome(service=service, options=options)
driver.set_page_load_timeout(25)
driver.set_script_timeout(25)
wait = WebDriverWait(driver, 28)


def wait_id(element_id: str):
    return wait.until(EC.presence_of_element_located((By.ID, element_id)))


def wait_css(selector: str):
    return wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, selector)))


def click(element) -> None:
    driver.execute_script("arguments[0].scrollIntoView({block:'center'}); arguments[0].click();", element)


def navigate(route: str) -> None:
    print(f"ROUTE: {route}", flush=True)
    driver.execute_script("window.location.hash = arguments[0];", f"#/{route}")
    time.sleep(0.25)


try:
    print(f"OPEN: {BASE_URL}", flush=True)
    try:
        driver.get(f"{BASE_URL}/")
    except TimeoutException:
        driver.execute_script("window.stop();")
    wait.until(lambda current: current.execute_script("return document.readyState") in {"interactive", "complete"})
    wait_id("navBar")
    report("Navegación principal", True)
    report("Menú Nosotros", bool(driver.find_elements(By.ID, "submenu-nosotros")))
    report("Menú Investigación", bool(driver.find_elements(By.ID, "submenu-investigacion")))
    report("Selector español/inglés", bool(driver.find_elements(By.ID, "kernel-language-switch")))

    # ITLA · Xmera: interacción con datos ficticios.
    navigate("herramientas")
    xmera_input = wait_id("xmera-input")
    xmera_input.clear()
    xmera_input.send_keys("20250893 18 4\n20212267 13 5")
    click(wait_id("xmera-generate"))
    wait.until(lambda current: '"20250893":[18,4]' in current.find_element(By.ID, "xmera-output").text)
    output = driver.find_element(By.ID, "xmera-output").text
    report("Xmera genera código", '"20250893":[18,4]' in output and '"20212267":[13,5]' in output)
    report("Xmera habilita copiar", driver.find_element(By.ID, "xmera-copy").is_enabled())
    click(wait_id("xmera-clear"))
    wait.until(lambda current: current.find_element(By.ID, "xmera-input").get_attribute("value") == "")
    report("Xmera limpia los datos", True)

    # UNAPEC/APEC · Banner: 1AC, 2PP, 3SP y 4EF.
    click(wait_id("tab-banner"))
    click(wait_id("open-primer-periodo"))
    first_input = wait_id("banner-primer-input")
    first_input.send_keys("A00108671 8 2\nA00122336 9 19")
    click(wait_id("banner-primer-process"))
    wait.until(lambda current: "2 estudiantes" in current.find_element(By.ID, "banner-primer-count").text)
    report("Banner procesa 1AC y 2PP", "A00108671" in driver.find_element(By.ID, "banner-primer-preview").text)
    report("Banner habilita 1AC", driver.find_element(By.ID, "banner-primer-download-1ac").is_enabled())
    report("Banner habilita 2PP", driver.find_element(By.ID, "banner-primer-download-2pp").is_enabled())

    click(wait_id("banner-back"))
    click(wait_id("open-segundo-periodo"))
    second_input = wait_id("banner-segundo-input")
    second_input.send_keys("A00108671 28\nA00122336 32")
    click(wait_id("banner-segundo-process"))
    wait.until(lambda current: "2 estudiantes" in current.find_element(By.ID, "banner-segundo-count").text)
    report("Banner procesa 3SP", "A00108671" in driver.find_element(By.ID, "banner-segundo-preview").text)
    report("Banner habilita 3SP", driver.find_element(By.ID, "banner-segundo-download").is_enabled())

    click(wait_id("banner-back"))
    click(wait_id("open-calificacion-final"))
    final_input = wait_id("banner-final-input")
    final_input.send_keys("A00108671 24\nA00122336 28")
    click(wait_id("banner-final-process"))
    wait.until(lambda current: "2 estudiantes" in current.find_element(By.ID, "banner-final-count").text)
    report("Banner procesa 4EF", "A00108671" in driver.find_element(By.ID, "banner-final-preview").text)
    report("Banner habilita 4EF", driver.find_element(By.ID, "banner-final-download").is_enabled())

    # Laboratorio: se valida la barrera de acceso, sin usar credenciales.
    navigate("laboratorioKernel")
    wait.until(lambda current: any(token in body_text(current) for token in ("Laboratorio", "Iniciar sesión", "Acceso", "Authentication", "Sign in")))
    lab_text = body_text(driver)
    report("Laboratorio Inteligente accesible", "Laboratorio" in lab_text)
    report("Control de acceso del Laboratorio", any(token in lab_text for token in ("Iniciar sesión", "Acceso", "Authentication", "Sign in")))

    # Equipo con fotografías.
    navigate("equipment")
    wait_css('[data-kernel-platform-page="team-nine"]')
    cards = driver.find_elements(By.CSS_SELECTOR, ".kernel-team-core__card")
    photos = driver.find_elements(By.CSS_SELECTOR, ".kernel-team-core__photo img")
    report("Equipo de nueve investigadores", len(cards) == 9, f"tarjetas={len(cards)}")
    report("Nueve fotografías visibles", len(photos) == 9, f"fotografías={len(photos)}")
    report("Fotografía de Miguel", any("miguel.jpg" in (photo.get_attribute("src") or "") for photo in photos))

    # Formación académica integrada en Nosotros.
    navigate("quienesSomos/formacion")
    wait_css('[data-kernel-platform-page="academic-background"]')
    academic_buttons = driver.find_elements(By.CSS_SELECTOR, "[data-kernel-academic-select]")
    report("Formación de nueve investigadores", len(academic_buttons) == 9, f"perfiles={len(academic_buttons)}")
    alicia = next((button for button in academic_buttons if button.get_attribute("data-kernel-academic-select") == "alicia-cordero"), None)
    report("Alicia en Formación", alicia is not None)
    if alicia is not None:
        click(alicia)
        wait_css('[data-kernel-researcher="alicia-cordero"]')
        report("Perfil académico de Alicia abre", True)

    # Publicaciones 2.0.
    navigate("publicaciones")
    wait_css('[data-kernel-platform-page="publications-2"]')
    publications_text = body_text(driver)
    report("Publicaciones 2.0 muestra 162", "162" in publications_text)
    report("Publicaciones 2.0 tiene buscador", bool(driver.find_elements(By.ID, "kernel-pub-search")))
    report("Publicaciones 2.0 muestra DOI", "DOI" in publications_text)

    # Proyectos 2.0.
    navigate("proyectos")
    wait_css('[data-kernel-platform-page="projects-2"]')
    projects_text = body_text(driver)
    report("Proyectos 2.0 muestra 10 destacados", "10" in projects_text)
    report("Proyectos 2.0 muestra 48 adicionales", "48" in projects_text)
    report("Proyectos 2.0 tiene buscador", bool(driver.find_elements(By.ID, "kernel-project-search")))

except TimeoutException as error:
    failures.append(f"Tiempo de espera agotado: {error}")
except Exception as error:  # noqa: BLE001
    failures.append(f"Excepción de navegador: {type(error).__name__}: {error}")
finally:
    try:
        browser_logs = driver.get_log("browser")
    except Exception:  # noqa: BLE001
        browser_logs = []
    try:
        driver.quit()
    except Exception as quit_error:  # noqa: BLE001
        print(f"Chrome shutdown warning: {quit_error}", flush=True)

result = {
    "base_url": BASE_URL,
    "passed": not failures,
    "checks": checks,
    "failures": failures,
    "browser_logs": browser_logs,
}
RESULT_PATH.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"BROWSER FUNCTIONAL GATE: {'PASS' if not failures else 'FAIL'}", flush=True)
for failure in failures:
    print(f"- {failure}", flush=True)
sys.exit(1 if failures else 0)
