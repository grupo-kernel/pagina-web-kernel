from __future__ import annotations

import json
import os
from pathlib import Path

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait

BASE_URL = os.environ.get("BASE_URL", "http://127.0.0.1:4191").rstrip("/")
RESULT_PATH = Path(os.environ.get("UI_LANGUAGE_RESULT", "ci-ui-language/result.json"))
RESULT_PATH.parent.mkdir(parents=True, exist_ok=True)

checks: list[str] = []
failures: list[str] = []
screenshots = RESULT_PATH.parent / "screenshots"
screenshots.mkdir(parents=True, exist_ok=True)


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
    "--window-size=1440,1600",
]:
    options.add_argument(argument)
options.set_capability("goog:loggingPrefs", {"browser": "ALL"})

driver = webdriver.Chrome(options=options)
driver.set_page_load_timeout(60)
wait = WebDriverWait(driver, 45)


def set_language(language: str) -> None:
    driver.execute_script(
        """
        const language=arguments[0];
        localStorage.setItem('kernel-language',language);
        localStorage.setItem('language',language);
        localStorage.setItem('lang',language);
        document.documentElement.lang=language;
        window.dispatchEvent(new CustomEvent('kernel-language-change',{detail:{language}}));
        document.dispatchEvent(new CustomEvent('kernel-language-change',{detail:{language}}));
        """,
        language,
    )
    wait.until(lambda d: d.execute_script(
        "return window.KernelUILanguageUnification?.diagnostics().lastLanguage === arguments[0]",
        language,
    ))


def open_route(route: str, selector: str) -> str:
    driver.execute_script("location.hash=arguments[0]", route)
    wait.until(lambda d: d.find_elements(By.CSS_SELECTOR, selector))
    wait.until(lambda d: d.execute_script(
        "return window.KernelUILanguageUnification?.diagnostics().lastLanguage === (localStorage.getItem('kernel-language') || 'es')"
    ))
    return driver.find_element(By.ID, "main").text


def background(selector: str) -> str:
    return driver.execute_script(
        "const e=document.querySelector(arguments[0]);return e?getComputedStyle(e).backgroundColor:'';",
        selector,
    )


try:
    driver.get(f"{BASE_URL}/#/home")
    wait.until(lambda d: d.execute_script(
        "return window.KernelUILanguageUnification?.version === '1.0.0'"
    ))
    set_language("en")

    services = open_route("#/servicios", "[data-filtro-servicio]")
    record("Services translated", "Institutional Catalog of Professional and Academic Services" in services)
    record("Services no longer show key Spanish labels", all(token not in services for token in [
        "Catálogo institucional de servicios", "Todos los servicios", "Explorar servicio",
        "Buscar en el catálogo de servicios"
    ]), services[:500])
    record("Service active tab uses institutional teal", background('[data-filtro-servicio][aria-pressed="true"]') == "rgb(15, 91, 93)", background('[data-filtro-servicio][aria-pressed="true"]'))
    driver.save_screenshot(str(screenshots / "services-en.png"))

    diagnostic = open_route("#/diagnosticoServicios", "form")
    record("Diagnostic form translated", all(token in diagnostic for token in [
        "Initial Assessment", "Full Name", "Prepare Request Email"
    ]), diagnostic[:500])
    record("Diagnostic form removes key Spanish labels", all(token not in diagnostic for token in [
        "Diagnóstico inicial", "Nombre completo", "Preparar correo de solicitud"
    ]))

    tools = open_route("#/herramientas", "#tab-xmera")
    record("Tools translated", all(token in tools for token in [
        "Academic Tools", "Xmera Grade Generator", "Generate Code"
    ]), tools[:500])
    record("Xmera active tab uses institutional teal", background("#tab-xmera") == "rgb(15, 91, 93)", background("#tab-xmera"))
    driver.find_element(By.ID, "tab-banner").click()
    wait.until(lambda d: d.execute_script("return document.getElementById('tab-banner')?.dataset.kernelUiActive === 'true'"))
    record("Banner active tab uses institutional teal", background("#tab-banner") == "rgb(15, 91, 93)", background("#tab-banner"))
    record("Inactive Xmera tab returns to white", background("#tab-xmera") == "rgb(255, 255, 255)", background("#tab-xmera"))
    driver.save_screenshot(str(screenshots / "tools-en.png"))

    about = open_route("#/quienesSomos", "[data-accordion-header]")
    record("About page translated", all(token in about for token in ["Who Are We?", "Mission", "Vision"]))
    record("About page removes mixed Spanish headings", all(token not in about for token in ["¿Quiénes somos?", "Misión", "Visión"]))
    record("About accordions use institutional dark color", background("[data-accordion-header]") == "rgb(7, 24, 32)", background("[data-accordion-header]"))

    team = open_route("#/equipment", ".kernel-team-core__card")
    record("Nine researcher cards load", len(driver.find_elements(By.CSS_SELECTOR, ".kernel-team-core__card")) == 9)
    record("Researcher roles and areas translated", all(token not in team for token in [
        "Investigador en métodos", "Métodos libres de Jacobiano", "Redes neuronales",
        "Ciencias actuariales", "Dinámica real"
    ]), team[:700])
    record("English researcher terminology present", all(token in team for token in [
        "Researcher in numerical methods", "Jacobian-free methods", "Neural networks"
    ]))
    driver.find_elements(By.CSS_SELECTOR, "[data-kernel-team-open]")[6].click()
    wait.until(lambda d: d.find_elements(By.CSS_SELECTOR, "[data-kernel-profile-panel]"))
    profile = driver.find_element(By.CSS_SELECTOR, "[data-kernel-profile-panel]").text
    record("José profile keeps completed PhD in English", "PhD in Mathematics — INTEC." in profile and "in progress" not in profile)

    lines = open_route("#/lineas", "[data-linea-id]")
    record("Research lines translated", all(token in lines for token in [
        "Research Lines", "Available Areas", "Design of New Hybrid Quasi-Newton"
    ]), lines[:600])
    record("Research lines remove key mixed labels", all(token not in lines for token in [
        "Áreas disponibles", "Diseño de nuevos algoritmos", "Mathematics education y"
    ]))
    record("Selected research line uses institutional teal", background('[data-linea-id][data-kernel-ui-active="true"]') == "rgb(15, 91, 93)", background('[data-linea-id][data-kernel-ui-active="true"]'))
    driver.save_screenshot(str(screenshots / "lines-en.png"))

    projects = open_route("#/proyectos", ".kernel-project-card")
    record("Projects note translated", "The 58 recorded participations" in projects)
    record("Project titles translated", "Iterative Processes for Solving Nonlinear Equations and Systems" in projects)
    record("Projects remove key mixed Spanish strings", all(token not in projects for token in [
        "Las 58 participaciones no equivalen", "Procesos iterativos para la resolución"
    ]))

    laboratory = open_route("#/laboratorioKernel", "#kernel-login")
    record("Laboratory login translated", all(token in laboratory for token in [
        "Protected Area", "Email Address", "Password", "Sign In"
    ]))
    record("Laboratory sign-in button uses institutional teal", background("#kernel-login button[type='submit']") == "rgb(15, 91, 93)", background("#kernel-login button[type='submit']"))

    set_language("es")
    spanish_lines = open_route("#/lineas", "[data-linea-id]")
    record("Spanish can be restored", all(token in spanish_lines for token in [
        "Líneas de investigación", "Áreas disponibles", "Diseño de nuevos algoritmos"
    ]))

    set_language("en")
    english_again = driver.find_element(By.ID, "main").text
    record("English can be reapplied after Spanish", "Research Lines" in english_again and "Available Areas" in english_again)

    driver.set_window_size(390, 1000)
    tools_mobile = open_route("#/herramientas", "#tab-xmera")
    record("Mobile tools remain translated", "Academic Tools" in tools_mobile)
    record("Mobile active tab remains teal", background("#tab-xmera") == "rgb(15, 91, 93)", background("#tab-xmera"))
    driver.save_screenshot(str(screenshots / "tools-mobile-en.png"))

    severe = [
        entry for entry in driver.get_log("browser")
        if entry.get("level") == "SEVERE" and "favicon" not in entry.get("message", "").lower()
    ]
    record("No severe JavaScript errors", not severe, json.dumps(severe, ensure_ascii=False))
except Exception as error:  # noqa: BLE001
    failures.append(f"Exception: {type(error).__name__}: {error}")
    print(failures[-1])
finally:
    payload = {"ok": not failures, "checks": checks, "failures": failures}
    RESULT_PATH.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    driver.quit()

if failures:
    raise SystemExit(1)
