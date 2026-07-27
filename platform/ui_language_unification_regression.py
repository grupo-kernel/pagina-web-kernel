from __future__ import annotations

import json
import os
import time
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


def contains_all(text: str, values: list[str]) -> bool:
    folded = text.casefold()
    return all(value.casefold() in folded for value in values)


def excludes_all(text: str, values: list[str]) -> bool:
    folded = text.casefold()
    return all(value.casefold() not in folded for value in values)


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


def settle(seconds: float = 2.8) -> None:
    end = time.time() + seconds
    while time.time() < end:
        driver.execute_script(
            """
            window.KernelUILanguageUnification?.apply?.();
            window.KernelUILanguageFinalizer?.apply?.();
            """
        )
        time.sleep(0.35)


def set_language(value: str) -> None:
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
        value,
    )
    settle(3.0)
    wait.until(lambda d: d.execute_script(
        "return document.documentElement.lang === arguments[0] && window.KernelUILanguageFinalizer?.diagnostics().runs > 0",
        value,
    ))


def open_route(route: str, selector: str) -> str:
    driver.execute_script("location.hash=arguments[0]", route)
    wait.until(lambda d: d.find_elements(By.CSS_SELECTOR, selector))
    settle(3.2)
    return driver.find_element(By.ID, "main").text


def background(selector: str) -> str:
    return driver.execute_script(
        "const e=document.querySelector(arguments[0]);return e?getComputedStyle(e).backgroundColor:'';",
        selector,
    )


def visible(selector: str) -> bool:
    return bool(driver.execute_script(
        """
        const e=document.querySelector(arguments[0]);
        if(!e) return false;
        const s=getComputedStyle(e), b=e.getBoundingClientRect();
        return !e.hidden && !e.classList.contains('hidden') && s.display!=='none' && b.width>0 && b.height>0;
        """,
        selector,
    ))


try:
    driver.get(f"{BASE_URL}/#/home")
    wait.until(lambda d: d.execute_script(
        "return window.KernelUILanguageUnification?.version === '1.0.0' && window.KernelUILanguageFinalizer?.version === '1.0.0'"
    ))
    set_language("en")

    services = open_route("#/servicios", "[data-filtro-servicio]")
    record("Services translated", contains_all(services, [
        "Institutional Catalog of Professional and Academic Services",
        "Applied and Computational Mathematics",
        "Every request is scoped before work begins"
    ]), services[:650])
    record("Services no longer show key Spanish labels", excludes_all(services, [
        "Catálogo institucional de servicios", "Todos los servicios", "Explorar servicio",
        "Buscar en el catálogo de servicios"
    ]), services[:650])
    record("Service active tab uses institutional teal", background('[data-filtro-servicio][aria-pressed="true"]') == "rgb(15, 91, 93)", background('[data-filtro-servicio][aria-pressed="true"]'))
    driver.save_screenshot(str(screenshots / "services-en.png"))

    diagnostic = open_route("#/diagnosticoServicios", "form")
    record("Diagnostic form translated", contains_all(diagnostic, [
        "Initial Assessment", "Full Name", "Prepare Request Email"
    ]), diagnostic[:650])
    record("Diagnostic form removes key Spanish labels", excludes_all(diagnostic, [
        "Diagnóstico inicial", "Nombre completo", "Preparar correo de solicitud"
    ]))

    tools = open_route("#/herramientas", "#tab-xmera")
    record("Tools translated", contains_all(tools, [
        "Academic Tools", "Grade-Publishing File Generator", "Open Tool"
    ]), tools[:800])
    xmera_active = visible("#panel-xmera")
    banner_active = visible("#panel-banner")
    active_tab = "#tab-xmera" if xmera_active else "#tab-banner"
    inactive_tab = "#tab-banner" if xmera_active else "#tab-xmera"
    record("Exactly one tools tab is active", xmera_active != banner_active, f"xmera={xmera_active}, banner={banner_active}")
    record("Active tools tab uses institutional teal", background(active_tab) == "rgb(15, 91, 93)", background(active_tab))
    record("Inactive tools tab is white", background(inactive_tab) == "rgb(255, 255, 255)", background(inactive_tab))
    driver.execute_script("document.querySelector(arguments[0]).click()", inactive_tab)
    settle(2.2)
    record("Tools tab state changes correctly", visible("#panel-xmera") != xmera_active and visible("#panel-banner") != banner_active)
    new_active = inactive_tab
    new_inactive = active_tab
    record("New active tools tab remains teal", background(new_active) == "rgb(15, 91, 93)", background(new_active))
    record("Previously active tools tab returns to white", background(new_inactive) == "rgb(255, 255, 255)", background(new_inactive))
    driver.save_screenshot(str(screenshots / "tools-en.png"))

    about = open_route("#/quienesSomos", "[data-accordion-header]")
    record("About page translated", contains_all(about, ["Who Are We?", "Mission", "Vision"]), about[:700])
    record("About page removes mixed Spanish headings", excludes_all(about, ["¿Quiénes somos?", "Misión", "Visión"]))
    record("About accordions use institutional dark color", background("[data-accordion-header]") == "rgb(7, 24, 32)", background("[data-accordion-header]"))

    team = open_route("#/equipment", ".kernel-team-core__card")
    record("Nine researcher cards load", len(driver.find_elements(By.CSS_SELECTOR, ".kernel-team-core__card")) == 9)
    record("Researcher roles and areas translated", excludes_all(team, [
        "Investigador en métodos", "Métodos libres de Jacobiano", "Redes neuronales",
        "Ciencias actuariales", "Dinámica real"
    ]), team[:900])
    record("English researcher terminology present", contains_all(team, [
        "Researcher in numerical methods", "Jacobian-free methods", "Neural networks"
    ]), team[:900])
    driver.execute_script("document.querySelectorAll('[data-kernel-team-open]')[6].click()")
    wait.until(lambda d: d.find_elements(By.CSS_SELECTOR, "[data-kernel-profile-panel]"))
    settle(2.8)
    profile = driver.find_element(By.CSS_SELECTOR, "[data-kernel-profile-panel]").text
    record("José profile keeps completed PhD in English", "PhD in Mathematics — INTEC." in profile and "in progress" not in profile, profile[:600])

    lines = open_route("#/lineas", "[data-linea-id]")
    record("Research lines translated", contains_all(lines, [
        "Research Lines", "Available Areas", "Design of New Hybrid Quasi-Newton"
    ]), lines[:800])
    record("Research lines remove key mixed labels", excludes_all(lines, [
        "Áreas disponibles", "Diseño de nuevos algoritmos", "Mathematics education y"
    ]), lines[:800])
    record("Selected research line uses institutional teal", background('[data-linea-id][data-kernel-final-active="true"]') == "rgb(15, 91, 93)", background('[data-linea-id][data-kernel-final-active="true"]'))
    driver.save_screenshot(str(screenshots / "lines-en.png"))

    projects = open_route("#/proyectos", ".kernel-project-card")
    record("Projects note translated", "The 58 recorded participations" in projects, projects[:700])
    record("Project titles translated", "Iterative Processes for Solving Nonlinear Equations and Systems" in projects, projects[:700])
    record("Projects remove key mixed Spanish strings", excludes_all(projects, [
        "Las 58 participaciones no equivalen", "Procesos iterativos para la resolución"
    ]))

    laboratory = open_route("#/laboratorioKernel", "#kernel-login")
    record("Laboratory login translated", contains_all(laboratory, [
        "Protected Area", "Email Address", "Password", "Sign In"
    ]), laboratory[:600])
    record("Laboratory sign-in button uses institutional teal", background("#kernel-login button[type='submit']") == "rgb(15, 91, 93)", background("#kernel-login button[type='submit']"))

    set_language("es")
    spanish_lines = open_route("#/lineas", "[data-linea-id]")
    record("Spanish can be restored", contains_all(spanish_lines, [
        "Líneas de investigación", "Áreas disponibles", "Diseño de nuevos algoritmos"
    ]), spanish_lines[:600])

    set_language("en")
    settle(1.5)
    english_again = driver.find_element(By.ID, "main").text
    record("English can be reapplied after Spanish", contains_all(english_again, ["Research Lines", "Available Areas"]))

    driver.set_window_size(390, 1000)
    tools_mobile = open_route("#/herramientas", "#tab-xmera")
    record("Mobile tools remain translated", "Academic Tools" in tools_mobile, tools_mobile[:500])
    mobile_active = "#tab-xmera" if visible("#panel-xmera") else "#tab-banner"
    record("Mobile active tab remains teal", background(mobile_active) == "rgb(15, 91, 93)", background(mobile_active))
    driver.save_screenshot(str(screenshots / "tools-mobile-en.png"))

    severe = [
        entry for entry in driver.get_log("browser")
        if entry.get("level") == "SEVERE"
        and "favicon" not in entry.get("message", "").lower()
        and "googletagmanager" not in entry.get("message", "").lower()
        and "script.google.com" not in entry.get("message", "").lower()
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
