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

BASE_URL = os.environ.get("BASE_URL", "http://127.0.0.1:4176").rstrip("/")
RESULT_PATH = Path(os.environ.get("HOME_NAV_RESULT", "ci-home-navigation/result.json"))
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
wait = WebDriverWait(driver, 30)


def ready(marker: str) -> None:
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, marker)))
    wait.until(
        lambda current: current.execute_script(
            "return document.documentElement.dataset.kernelFastRoute !== 'true'"
        )
    )


try:
    driver.get(f"{BASE_URL}/#/home")
    ready('[data-kernel-platform-page="home-2b"]')

    words = driver.find_elements(By.CSS_SELECTOR, ".kernel-home-2b__hero h1 .kernel-title-word")
    record("Título dividido en dos palabras", len(words) == 2, f"palabras={len(words)}")
    if len(words) == 2:
        first = words[0].rect
        second = words[1].rect
        gap = second["x"] - (first["x"] + first["width"])
        record("Separación visible entre El y Kernel", gap >= 8, f"separación={gap:.1f}px")

    cache_available = driver.execute_script(
        "return Boolean(window.KernelHomeNavigationFix && window.KernelHomeNavigationFix.warmData)"
    )
    record("Precarga institucional disponible", cache_available)
    time.sleep(0.45)

    driver.execute_script(
        "window.__projectPendingSeen=false;"
        "const observer=new MutationObserver(()=>{"
        "if(document.documentElement.dataset.kernelFastRoute==='true') window.__projectPendingSeen=true;"
        "});"
        "observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-kernel-fast-route']});"
        "location.hash='#/proyectos';"
    )
    wait.until(
        lambda current: current.execute_script("return Boolean(window.__projectPendingSeen)")
    )
    pending_hidden = driver.execute_script(
        "const child=document.querySelector('#main>*');"
        "return document.documentElement.dataset.kernelFastRoute==='true' && (!child || getComputedStyle(child).visibility==='hidden');"
    )
    record("Plantilla anterior oculta al abrir Proyectos", pending_hidden)
    ready('[data-kernel-platform-page="projects-2"]')
    record(
        "Proyectos 2.0 es la única vista final",
        len(driver.find_elements(By.CSS_SELECTOR, '[data-kernel-platform-page="projects-2"]')) == 1,
    )

    start = time.monotonic()
    driver.execute_script(
        "window.__homePendingSeen=false;"
        "const observer=new MutationObserver(()=>{"
        "if(document.documentElement.dataset.kernelFastRoute==='true') window.__homePendingSeen=true;"
        "});"
        "observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-kernel-fast-route']});"
        "location.hash='#/home';"
    )
    wait.until(lambda current: current.execute_script("return Boolean(window.__homePendingSeen)"))
    ready('[data-kernel-platform-page="home-2b"]')
    elapsed = time.monotonic() - start
    record("Transición protegida hacia la portada", True)
    record("Portada precargada sin demora prolongada", elapsed < 3.0, f"tiempo={elapsed:.2f}s")

    severe = [
        entry
        for entry in driver.get_log("browser")
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
        )
        + "\n",
        encoding="utf-8",
    )
    driver.quit()

print(f"\nHOME NAVIGATION RESULT: {'PASS' if not failures else 'FAIL'}")
for failure in failures:
    print(f"- {failure}")
raise SystemExit(1 if failures else 0)
