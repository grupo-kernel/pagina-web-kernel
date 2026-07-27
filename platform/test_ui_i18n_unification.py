from __future__ import annotations

import json
import os
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

CASES = [
    ("home", "Research and scientific services", "Investigación y servicios científicos"),
    ("diagnosticoServicios", "Tell us what you need to solve", "Cuéntenos qué necesita resolver"),
    ("servicios", "Institutional catalog of professional and academic services", "Catálogo institucional de servicios profesionales y académicos"),
    ("herramientas", "Academic Tools", "Herramientas Académicas"),
    ("laboratorioKernel", "Sign in", "Iniciar sesión"),
    ("quienesSomos", "Who we are", "Nuestro compromiso institucional"),
    ("equipment", "Researcher in numerical methods, PDEs, and mathematics education", "Investigador en métodos numéricos"),
    ("lineas", "The group's scientific work areas", "Áreas de trabajo científico del grupo"),
    ("proyectos", "The 58 participations do not necessarily represent 58 unique projects", "Las 58 participaciones no equivalen"),
    ("publicaciones", "El Kernel publications", "Producción científica verificable"),
]

report: dict[str, object] = {"base_url": BASE_URL, "routes": {}, "failures": [], "exception": None}

options = Options()
for argument in ["--headless=new", "--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage", "--window-size=1440,1800"]:
    options.add_argument(argument)
options.set_capability("goog:loggingPrefs", {"browser": "ALL"})

driver = webdriver.Chrome(options=options)
driver.set_page_load_timeout(90)
wait = WebDriverWait(driver, 45)


def save_report() -> None:
    REPORT_PATH.write_text(json.dumps(report, indent=2, ensure_ascii=False), encoding="utf-8")


def body_text() -> str:
    return driver.execute_script("return (document.body.innerText || '').replace(/\\s+/g, ' ').trim()")


def set_language(language: str) -> None:
    driver.execute_script(
        """
        const language = arguments[0];
        localStorage.setItem('kernel-language', language);
        localStorage.setItem('language', language);
        localStorage.setItem('lang', language);
        document.documentElement.lang = language;
        window.dispatchEvent(new CustomEvent('kernel-language-change', {detail:{language}}));
        document.dispatchEvent(new CustomEvent('kernel-language-change', {detail:{language}}));
        """,
        language,
    )


def wait_route_ready(route: str) -> None:
    selectors = {
        "equipment": ".kernel-team-core__card",
        "laboratorioKernel": "#main form, #main button",
        "servicios": '#main button[aria-pressed="true"]',
        "herramientas": "#tab-xmera",
        "lineas": ".lineas-shell",
        "proyectos": ".kernel-project-card",
        "publicaciones": ".kernel-publication-card",
    }
    selector = selectors.get(route)
    if selector:
        wait.until(lambda current: current.find_elements(By.CSS_SELECTOR, selector))
    if route == "equipment":
        wait.until(lambda current: len(current.find_elements(By.CSS_SELECTOR, ".kernel-team-core__card")) == 9)
    if route == "herramientas":
        wait.until(lambda current: current.find_elements(By.ID, "tab-banner"))


def apply_language_layers() -> None:
    driver.execute_script(
        """
        window.KernelUiI18nUnification?.apply?.();
        window.KernelUiI18nFinalizer?.settle?.();
        window.KernelUiI18nWatchdog?.apply?.();
        window.KernelSiteChromeLanguageFix?.apply?.();
        window.KernelTeamLanguageFix?.apply?.();
        window.KernelToolsEnglishContent?.apply?.();
        window.KernelNameDegreeFix?.apply?.();
        """
    )


def open_route(route: str, language: str, expected: str) -> None:
    driver.get(f"{BASE_URL}/#/{route}")
    wait.until(lambda current: current.execute_script("return document.readyState") == "complete")
    wait.until(
        lambda current: current.execute_script(
            "return Boolean(window.KernelUiI18nUnification && window.KernelUiI18nFinalizer && window.KernelSiteChromeLanguageFix)"
        )
    )
    set_language(language)
    wait.until(
        lambda current: current.execute_script(
            "return window.KernelUiI18nUnification?.diagnostics().translations >= 590 && window.KernelUiI18nFinalizer?.diagnostics().translations >= 590"
        )
    )
    wait_route_ready(route)
    apply_language_layers()
    WebDriverWait(driver, 18).until(lambda current: expected.lower() in body_text().lower())
    time.sleep(0.75)
    apply_language_layers()
    time.sleep(0.25)


def background(element) -> str:
    return driver.execute_script("return getComputedStyle(arguments[0]).backgroundColor", element)


try:
    driver.get(f"{BASE_URL}/")
    wait.until(lambda current: current.execute_script("return document.readyState") == "complete")
    set_language("en")

    for route, expected, forbidden in CASES:
        try:
            open_route(route, "en", expected)
            text = body_text()
            lower = text.lower()
            details: dict[str, object] = {
                "expected": expected,
                "expected_present": expected.lower() in lower,
                "forbidden": forbidden,
                "forbidden_present": forbidden.lower() in lower,
            }
            ok = bool(details["expected_present"]) and not bool(details["forbidden_present"])

            if route == "home":
                header = driver.find_element(By.ID, "header")
                footer = driver.find_element(By.ID, "footer")
                driver.execute_script("window.KernelSiteChromeLanguageFix.apply()")
                time.sleep(0.25)
                details["header_english"] = "Research and scientific services" in header.text
                details["footer_rights_english"] = "All rights reserved" in footer.text
                details["header_spanish_present"] = "Investigación y servicios científicos" in header.text
                ok = ok and bool(details["header_english"]) and bool(details["footer_rights_english"])
                ok = ok and not bool(details["header_spanish_present"])

            elif route == "servicios":
                active = driver.find_element(By.CSS_SELECTOR, '#main button[aria-pressed="true"]')
                details["active_filter_background"] = background(active)
                ok = ok and details["active_filter_background"] == "rgb(15, 91, 93)"

            elif route == "herramientas":
                xmera = driver.find_element(By.ID, "tab-xmera")
                banner = driver.find_element(By.ID, "tab-banner")
                details["xmera_initial"] = background(xmera)
                driver.execute_script("arguments[0].click()", banner)
                WebDriverWait(driver, 5).until(lambda current: banner.get_attribute("aria-selected") == "true")
                WebDriverWait(driver, 12).until(lambda current: "grade publishing generator" in body_text().lower())
                time.sleep(0.5)
                details["banner_after_click"] = background(banner)
                details["xmera_after_click"] = background(xmera)
                details["banner_spanish_present"] = "Generador de Publicaciones de Calificaciones" in body_text()
                ok = ok and details["xmera_initial"] == "rgb(15, 91, 93)"
                ok = ok and details["banner_after_click"] == "rgb(15, 91, 93)"
                ok = ok and details["xmera_after_click"] == "rgb(255, 255, 255)"
                ok = ok and not bool(details["banner_spanish_present"])

            elif route == "laboratorioKernel":
                sign_in = next((button for button in driver.find_elements(By.CSS_SELECTOR, "#main button") if "Sign in" in button.text), None)
                details["login_background"] = background(sign_in) if sign_in is not None else None
                ok = ok and details["login_background"] == "rgb(15, 91, 93)"

            elif route == "quienesSomos":
                details["legacy_hero_hidden"] = bool(
                    driver.execute_script(
                        "const e=document.querySelector('[data-kernel-legacy-who-hero]'); return e && getComputedStyle(e).display === 'none';"
                    )
                )
                details["identity_english"] = "identity, purpose, and way of working" in lower
                ok = ok and bool(details["legacy_hero_hidden"]) and bool(details["identity_english"])

            elif route == "equipment":
                time.sleep(1.8)
                apply_language_layers()
                headings = [element.text for element in driver.find_elements(By.CSS_SELECTOR, ".kernel-team-core__card h2")]
                details["headings"] = headings
                details["duplicate_degree_cards"] = driver.execute_script(
                    "return window.KernelNameDegreeFix?.diagnostics().duplicateInlineDegrees ?? -1"
                )
                details["jose_degree_count"] = next((heading.count("Ph.D.") for heading in headings if "Jose Alberto Reyes Reyes" in heading), 0)
                ok = ok and details["duplicate_degree_cards"] == 0 and details["jose_degree_count"] == 1

            elif route == "lineas":
                active = driver.find_element(By.CSS_SELECTOR, '[data-kernel-line-card].kernel-line-active')
                image = driver.execute_script("return getComputedStyle(arguments[0]).backgroundImage", active)
                details["active_line_background"] = image
                ok = ok and "15, 91, 93" in image and "85, 128, 193" not in image

            details["ok"] = ok
            report["routes"][route] = details
            if not ok:
                report["failures"].append(route)

        except Exception as error:  # noqa: BLE001
            report["routes"][route] = {
                "ok": False,
                "expected": expected,
                "forbidden": forbidden,
                "error": f"{type(error).__name__}: {error}",
            }
            report["failures"].append(route)

        driver.save_screenshot(str(OUT / f"{route}-english.png"))
        save_report()

    open_route("diagnosticoServicios", "es", "Cuéntenos qué necesita resolver")
    report["spanish_restore"] = "Cuéntenos qué necesita resolver" in body_text()
    if not report["spanish_restore"]:
        report["failures"].append("spanish_restore")

    severe = [
        entry for entry in driver.get_log("browser")
        if entry.get("level") == "SEVERE" and "favicon" not in entry.get("message", "").lower()
    ]
    report["severe_console"] = severe
    if severe:
        report["failures"].append("console")

except Exception as error:  # noqa: BLE001
    report["exception"] = {
        "type": type(error).__name__,
        "message": str(error),
        "traceback": traceback.format_exc(),
        "url": driver.current_url,
    }
    report["failures"].append("exception")
finally:
    save_report()
    driver.quit()

print(json.dumps(report, indent=2, ensure_ascii=False))
if report["failures"]:
    raise SystemExit("UI/i18n failures: " + ", ".join(dict.fromkeys(report["failures"])))
