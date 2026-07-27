from __future__ import annotations

import json
import os
import re
import time
import traceback
from pathlib import Path

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait

BASE_URL = os.environ.get("BASE_URL", "http://127.0.0.1:4191").rstrip("/")
OUT = Path(os.environ.get("UI_I18N_RESULT_DIR", "ci-ui-i18n"))
OUT.mkdir(parents=True, exist_ok=True)
REPORT_PATH = OUT / "result.json"

report: dict[str, object] = {"base_url": BASE_URL, "checks": {}, "failures": [], "exception": None}

options = Options()
for argument in ["--headless=new", "--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage", "--window-size=1440,1800"]:
    options.add_argument(argument)
options.set_capability("goog:loggingPrefs", {"browser": "ALL"})

driver = webdriver.Chrome(options=options)
driver.set_page_load_timeout(90)
wait = WebDriverWait(driver, 45)


def save() -> None:
    REPORT_PATH.write_text(json.dumps(report, indent=2, ensure_ascii=False), encoding="utf-8")


def text() -> str:
    return driver.execute_script("return (document.body.innerText || '').replace(/\\s+/g,' ').trim()")


def record(name: str, condition: bool, detail: object = None) -> None:
    report["checks"][name] = {"ok": bool(condition), "detail": detail}
    if not condition:
        report["failures"].append(name)


def set_language(language: str) -> None:
    driver.execute_script(
        """
        const lang=arguments[0];
        localStorage.setItem('kernel-language',lang);
        localStorage.setItem('language',lang);
        localStorage.setItem('lang',lang);
        document.documentElement.lang=lang;
        window.dispatchEvent(new CustomEvent('kernel-language-change',{detail:{language:lang}}));
        document.dispatchEvent(new CustomEvent('kernel-language-change',{detail:{language:lang}}));
        """,
        language,
    )


def open_route(route: str, selector: str | None = None, language: str = "en") -> None:
    driver.get(f"{BASE_URL}/#/{route}")
    wait.until(lambda d: d.execute_script("return document.readyState") == "complete")
    wait.until(
        lambda d: d.execute_script(
            "return Boolean(window.KernelUiI18nUnification && window.KernelUiI18nFinalizer && window.KernelSiteChromeLanguageFix && window.KernelNameDegreeFix && window.KernelTeamLanguageFix)"
        )
    )
    set_language(language)
    if selector:
        wait.until(lambda d: d.find_elements(By.CSS_SELECTOR, selector))
    driver.execute_script(
        "window.KernelUiI18nUnification.apply(); window.KernelUiI18nFinalizer.apply(); window.KernelSiteChromeLanguageFix.apply(); window.KernelTeamLanguageFix.apply(); window.KernelNameDegreeFix.apply();"
    )
    time.sleep(1.2)


def background(selector: str) -> str:
    return driver.execute_script("const e=document.querySelector(arguments[0]);return e?getComputedStyle(e).backgroundColor:'';", selector)


try:
    open_route("home")
    header_text = driver.find_element(By.ID, "header").text
    footer_text = driver.find_element(By.ID, "footer").text
    record("home header English", "Research and scientific services" in header_text and "Investigación y servicios científicos" not in header_text, header_text)
    record("footer rights English", "All rights reserved" in footer_text, footer_text[-350:])

    open_route("servicios", '#main button[aria-pressed="true"]')
    services_text = text()
    record("services English", "Institutional catalog of professional and academic services" in services_text and "Catálogo institucional de servicios" not in services_text)
    record("service active teal", background('#main button[aria-pressed="true"]') == "rgb(15, 91, 93)", background('#main button[aria-pressed="true"]'))

    open_route("herramientas", "#tab-xmera")
    tools_text = text()
    record("tools English", "Academic Tools" in tools_text and "Herramientas Académicas" not in tools_text)
    record("Xmera active teal", background("#tab-xmera") == "rgb(15, 91, 93)", background("#tab-xmera"))
    driver.find_element(By.ID, "tab-banner").click()
    time.sleep(1)
    record("Banner active teal", background("#tab-banner") == "rgb(15, 91, 93)", background("#tab-banner"))
    record("Xmera inactive white", background("#tab-xmera") == "rgb(255, 255, 255)", background("#tab-xmera"))
    record("Banner content English", "Grade Publishing Generator" in text() and "Generador de Publicaciones de Calificaciones" not in text())

    open_route("laboratorioKernel", "#kernel-login")
    laboratory_text = text()
    record("laboratory English", all(value in laboratory_text for value in ["Protected area", "Email address", "Password", "Sign in"]) and "Iniciar sesión" not in laboratory_text)
    record("laboratory action teal", background("#kernel-login button[type='submit']") == "rgb(15, 91, 93)", background("#kernel-login button[type='submit']"))

    open_route("quienesSomos")
    about_text = text()
    record("about English", "Who we are" in about_text and "Nuestro compromiso institucional" not in about_text)
    record("legacy about hero hidden", bool(driver.execute_script("const e=document.querySelector('[data-kernel-legacy-who-hero]');return e&&getComputedStyle(e).display==='none';")))

    open_route("equipment", ".kernel-team-core__card")
    wait.until(lambda d: len(d.find_elements(By.CSS_SELECTOR, ".kernel-team-core__card")) == 9)
    driver.execute_script("window.KernelTeamLanguageFix.apply(); window.KernelNameDegreeFix.apply();")
    time.sleep(1.5)
    team_text = text()
    headings = [element.text for element in driver.find_elements(By.CSS_SELECTOR, ".kernel-team-core__card h2")]
    duplicate_headings = [heading for heading in headings if len(re.findall(r"(?:Ph\.D\.|M\.Sc\.)", heading)) > 1]
    jose_heading = next((heading for heading in headings if heading.startswith("Jose Alberto Reyes Reyes")), "")
    record("nine team cards", len(headings) == 9, headings)
    record("team English", "Researcher in numerical methods, PDEs, and mathematics education" in team_text and "Investigador en métodos numéricos" not in team_text)
    record("no repeated degrees", not duplicate_headings, duplicate_headings)
    record("Jose degree once", jose_heading.count("Ph.D.") == 1, jose_heading)
    driver.save_screenshot(str(OUT / "equipment-english.png"))

    open_route("lineas", ".lineas-shell")
    lines_text = text()
    record("research lines English", "The group's scientific work areas" in lines_text and "Áreas de trabajo científico del grupo" not in lines_text)
    record("selected line institutional color", "15, 91, 93" in driver.execute_script("const e=document.querySelector('[data-kernel-line-card].kernel-line-active');return e?getComputedStyle(e).backgroundImage:'';"))

    open_route("proyectos", ".kernel-project-card")
    projects_text = text()
    record("projects English", "The 58 participations do not necessarily represent 58 unique projects" in projects_text and "Las 58 participaciones no equivalen" not in projects_text)

    open_route("publicaciones", ".kernel-publication-card")
    record("publications English", "El Kernel publications" in text() and "Producción científica verificable" not in text())

    open_route("diagnosticoServicios", "form", "es")
    record("Spanish restored", "Cuéntenos qué necesita resolver" in text())

    severe = [entry for entry in driver.get_log("browser") if entry.get("level") == "SEVERE" and "favicon" not in entry.get("message", "").lower()]
    record("no severe JavaScript errors", not severe, severe)
except Exception as error:  # noqa: BLE001
    report["exception"] = {"type": type(error).__name__, "message": str(error), "traceback": traceback.format_exc(), "url": driver.current_url}
    report["failures"].append("exception")
finally:
    save()
    driver.quit()

print(json.dumps(report, indent=2, ensure_ascii=False))
if report["failures"]:
    raise SystemExit("UI/i18n failures: " + ", ".join(dict.fromkeys(report["failures"])))
