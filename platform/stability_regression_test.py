from __future__ import annotations

import json
import os
import time
from pathlib import Path

from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

BASE_URL = os.environ.get("BASE_URL", "http://127.0.0.1:4175").rstrip("/")
RESULT_PATH = Path(os.environ.get("STABILITY_RESULT", "ci-stability/stability-result.json"))
SCREENSHOT_DIR = RESULT_PATH.parent / "screenshots"
RESULT_PATH.parent.mkdir(parents=True, exist_ok=True)
SCREENSHOT_DIR.mkdir(parents=True, exist_ok=True)

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
driver.set_page_load_timeout(50)
wait = WebDriverWait(driver, 35)


def open_url(path: str = "") -> None:
    driver.get(f"{BASE_URL}/{path.lstrip('/')}")
    wait.until(lambda current: current.execute_script("return document.readyState") == "complete")


def wait_ready(marker: str | None = None) -> None:
    if marker:
        wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, marker)))
    wait.until(lambda current: current.execute_script(
        "return document.documentElement.dataset.kernelRoutePending !== 'true'"
    ))


def broken_images() -> list[str]:
    return driver.execute_script(
        "return [...document.images].filter(i => i.complete && i.naturalWidth === 0 && !i.hidden).map(i => i.currentSrc || i.src || i.alt);"
    )


def save_screenshot(name: str) -> None:
    driver.save_screenshot(str(SCREENSHOT_DIR / f"{name}.png"))


try:
    # Home: no icon-font dependency, no broken images, and stable new template.
    open_url("#/home")
    wait_ready('[data-kernel-platform-page="home-2b"]')
    save_screenshot("home-es")
    record("Portada 2B estable", bool(driver.find_elements(By.CSS_SELECTOR, '[data-kernel-platform-page="home-2b"]')))
    inline_icons = driver.find_elements(By.CSS_SELECTOR, ".kernel-home-2b .kernel-inline-icon")
    record("Iconos SVG independientes de Boxicons", len(inline_icons) >= 16, f"iconos={len(inline_icons)}")
    area_icons = driver.find_elements(By.CSS_SELECTOR, ".kernel-home-2b__area-icon .kernel-inline-icon")
    news_icons = driver.find_elements(By.CSS_SELECTOR, ".kernel-home-2b__news-icon .kernel-inline-icon")
    record("Cinco iconos de líneas visibles", len(area_icons) == 5, f"iconos={len(area_icons)}")
    record("Tres iconos de novedades visibles", len(news_icons) == 3, f"iconos={len(news_icons)}")
    brands = [element.text.strip() for element in driver.find_elements(By.CSS_SELECTOR, ".kernel-home-2b__brand-mark")]
    record("Marcas ITLA y UNAPEC visibles", "ITLA" in brands and "UNAPEC" in brands, f"marcas={brands}")
    record("Sin imágenes rotas en portada", not broken_images(), str(broken_images()))

    diagnostics = driver.execute_script("return window.KernelUIStability && window.KernelUIStability.diagnostics();")
    record("Diagnóstico de interfaz disponible", bool(diagnostics), str(diagnostics))

    # Team: route is masked while the native view is replaced; final view has nine photos.
    driver.execute_script(
        "window.__kernelPendingSeen = false;"
        "const observer = new MutationObserver(() => {"
        " if (document.documentElement.dataset.kernelRoutePending === 'true') window.__kernelPendingSeen = true;"
        "});"
        "observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-kernel-route-pending']});"
        "location.hash='#/equipment';"
    )
    wait_ready('[data-kernel-platform-page="team-nine"]')
    save_screenshot("team-es")
    pending_seen = driver.execute_script("return Boolean(window.__kernelPendingSeen)")
    record("Transición protegida hacia Equipo", pending_seen)
    cards = driver.find_elements(By.CSS_SELECTOR, ".kernel-team-core__card")
    photos = driver.find_elements(By.CSS_SELECTOR, ".kernel-team-core__photo img")
    record("Equipo nuevo sin duplicar la versión anterior", len(cards) == 9 and len(driver.find_elements(By.CSS_SELECTOR, '[data-kernel-platform-page="team-nine"]')) == 1, f"tarjetas={len(cards)}")
    record("Nueve fotografías del equipo", len(photos) == 9, f"fotografías={len(photos)}")
    record("Sin imágenes rotas en Equipo", not broken_images(), str(broken_images()))

    # Language: one click must re-render all integrated modules, not only the menu.
    language_button = wait.until(EC.presence_of_element_located((By.ID, "kernel-language-switch")))
    driver.execute_script("arguments[0].click();", language_button)
    wait.until(lambda current: current.execute_script("return document.documentElement.lang") == "en")
    wait.until(lambda current: "Research team" in current.find_element(By.TAG_NAME, "body").text)
    team_text = driver.find_element(By.TAG_NAME, "body").text
    record("Equipo completamente actualizado a inglés", "Research team" in team_text and "Researcher in numerical methods" in team_text)
    save_screenshot("team-en")

    # Academic background in English, including data fields.
    open_url("?kernelSection=formacion#/quienesSomos")
    wait_ready('[data-kernel-platform-page="academic-background"]')
    academic_text = driver.find_element(By.TAG_NAME, "body").text
    record("Formación académica en inglés", "Academic background and experience" in academic_text and "PhD in Mathematics" in academic_text)
    record("Nueve perfiles académicos", len(driver.find_elements(By.CSS_SELECTOR, "[data-kernel-academic-select]")) == 9)
    save_screenshot("formation-en")

    # Publications and projects in English.
    open_url("#/publicaciones")
    wait_ready('[data-kernel-platform-page="publications-2"]')
    publications_text = driver.find_element(By.TAG_NAME, "body").text
    record("Publicaciones 2.0 en inglés", "El Kernel publications" in publications_text and "Unique records" in publications_text)

    open_url("#/proyectos")
    wait_ready('[data-kernel-platform-page="projects-2"]')
    projects_text = driver.find_element(By.TAG_NAME, "body").text
    record("Proyectos 2.0 en inglés", "Projects and strategic proposals" in projects_text and "Iterative processes for solving nonlinear equations" in projects_text)

    # Laboratory: pending state masks intermediate native content and only releases the protected view.
    driver.execute_script(
        "window.__kernelLabPendingSeen = false;"
        "const labObserver = new MutationObserver(() => {"
        " if (document.documentElement.dataset.kernelRoutePending === 'true') window.__kernelLabPendingSeen = true;"
        "});"
        "labObserver.observe(document.documentElement,{attributes:true,attributeFilter:['data-kernel-route-pending']});"
        "location.hash='#/laboratorioKernel';"
    )
    wait.until(lambda current: any(token in current.find_element(By.TAG_NAME, "body").text for token in ["Laboratory", "Laboratorio", "Sign in", "Iniciar sesión", "Access", "Acceso"]))
    wait_ready()
    lab_text = driver.find_element(By.TAG_NAME, "body").text
    record("Transición protegida hacia Laboratorio", driver.execute_script("return Boolean(window.__kernelLabPendingSeen)"))
    record("Laboratorio sin mostrar una ruta intermedia", "Laboratory" in lab_text or "Laboratorio" in lab_text)
    record("Control de acceso conservado", any(token in lab_text for token in ["Sign in", "Iniciar sesión", "Access", "Acceso", "Authentication"]))
    record("Sin imágenes rotas en Laboratorio", not broken_images(), str(broken_images()))
    save_screenshot("laboratory")

    # Return to Spanish and confirm all managed modules follow the language state.
    language_button = wait.until(EC.presence_of_element_located((By.ID, "kernel-language-switch")))
    driver.execute_script("arguments[0].click();", language_button)
    wait.until(lambda current: current.execute_script("return document.documentElement.lang") == "es")
    open_url("#/home")
    wait_ready('[data-kernel-platform-page="home-2b"]')
    home_text = driver.find_element(By.TAG_NAME, "body").text
    record("Retorno integral al español", "Líneas de investigación" in home_text and "Herramientas destacadas" in home_text)

    browser_logs = driver.get_log("browser")
    severe_logs = [entry for entry in browser_logs if entry.get("level") == "SEVERE" and "favicon" not in entry.get("message", "").lower()]
    record("Sin errores graves de JavaScript", not severe_logs, json.dumps(severe_logs, ensure_ascii=False))

except TimeoutException as error:
    failures.append(f"Tiempo de espera agotado: {error}")
except Exception as error:  # noqa: BLE001
    failures.append(f"Excepción de navegador: {type(error).__name__}: {error}")
finally:
    result = {
        "base_url": BASE_URL,
        "passed": not failures,
        "checks": checks,
        "failures": failures,
    }
    RESULT_PATH.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    driver.quit()

print(f"\nSTABILITY REGRESSION RESULT: {'PASS' if not failures else 'FAIL'}")
for failure in failures:
    print(f"- {failure}")
raise SystemExit(1 if failures else 0)
