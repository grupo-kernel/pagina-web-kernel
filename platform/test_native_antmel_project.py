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

BASE_URL = os.environ.get("BASE_URL", "http://127.0.0.1:4199").rstrip("/")
RESULT_DIR = Path(os.environ.get("NATIVE_PROJECT_RESULT_DIR", "ci-native-antmel-project"))
RESULT_DIR.mkdir(parents=True, exist_ok=True)
RESULT_PATH = RESULT_DIR / "result.json"

TITLE = "Análisis dinámico y estabilidad de métodos iterativos sin Jacobiana para sistemas de ecuaciones no lineales"
DEPLOYMENT = "20260727-native-antmel-2"
report: dict[str, object] = {"checks": {}, "failures": [], "exception": None}

options = Options()
for argument in [
    "--headless=new",
    "--no-sandbox",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--window-size=430,1800",
]:
    options.add_argument(argument)
options.set_capability("goog:loggingPrefs", {"browser": "ALL"})

driver = webdriver.Chrome(options=options)
driver.set_page_load_timeout(90)
wait = WebDriverWait(driver, 60)


def save() -> None:
    RESULT_PATH.write_text(json.dumps(report, indent=2, ensure_ascii=False), encoding="utf-8")


def record(name: str, condition: bool, detail: object = None) -> None:
    report["checks"][name] = {"ok": bool(condition), "detail": detail}
    if not condition:
        report["failures"].append(name)
    print(f"{'PASS' if condition else 'FAIL'}: {name}")
    save()


def normalize(value: str) -> str:
    return " ".join(str(value or "").split())


def project_titles() -> list[str]:
    return [
        normalize(card.find_element(By.CSS_SELECTOR, "h2,h3").text)
        for card in driver.find_elements(By.CSS_SELECTOR, "#main .kernel-project-list .kernel-project-card")
    ]


def main_text() -> str:
    return normalize(driver.find_element(By.ID, "main").text)


def set_input_value(element_id: str, value: str) -> None:
    driver.execute_script(
        """
        const input = document.getElementById(arguments[0]);
        const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
        setter.call(input, arguments[1]);
        input.dispatchEvent(new InputEvent('input', {bubbles:true, inputType:'insertText', data:arguments[1]}));
        input.dispatchEvent(new Event('change', {bubbles:true}));
        """,
        element_id,
        value,
    )


def select_visible_text(element_id: str, visible_text: str) -> None:
    selected = driver.execute_script(
        """
        const select = document.getElementById(arguments[0]);
        const option = [...select.options].find(item => item.textContent.trim() === arguments[1]);
        if (!option) return false;
        const setter = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value').set;
        setter.call(select, option.value);
        select.dispatchEvent(new Event('input', {bubbles:true}));
        select.dispatchEvent(new Event('change', {bubbles:true}));
        return true;
        """,
        element_id,
        visible_text,
    )
    if not selected:
        raise RuntimeError(f"Option not found in {element_id}: {visible_text}")


try:
    driver.get(f"{BASE_URL}/#/proyectos")
    wait.until(lambda current: current.execute_script("return document.readyState") == "complete")
    wait.until(lambda current: current.find_elements(By.CSS_SELECTOR, "#main .kernel-project-list"))
    wait.until(lambda current: len(current.find_elements(By.CSS_SELECTOR, "#main .kernel-project-list .kernel-project-card")) == 13)
    wait.until(lambda current: current.execute_script("return Boolean(window.KernelProjectNativeStabilityFix)"))
    driver.execute_script("window.KernelProjectNativeStabilityFix.apply()")
    time.sleep(0.5)

    deployment = driver.execute_script(
        "return document.querySelector('meta[name=kernel-deployment]')?.content || ''"
    )
    module_source = driver.execute_script(
        "return [...document.scripts].map(script => script.src).find(src => src.includes('index-BEtvhqLu.js')) || ''"
    )
    stylesheet = driver.execute_script(
        "return [...document.querySelectorAll('link[rel=stylesheet]')].map(link => link.href).find(href => href.includes('index-DDHYSPOT.css')) || ''"
    )
    record("New deployment marker is present", deployment == DEPLOYMENT, deployment)
    record("Application bundle is cache-busted", DEPLOYMENT in module_source, module_source)
    record("Application stylesheet is cache-busted", DEPLOYMENT in stylesheet, stylesheet)
    record(
        "Obsolete overlay module is not loaded",
        not driver.execute_script("return Boolean(window.KernelAntmelApprovedProjectDefinitive)"),
    )
    record(
        "Native project stabilizer is loaded",
        driver.execute_script("return window.KernelProjectNativeStabilityFix?.version") == "1.0.0",
        driver.execute_script("return window.KernelProjectNativeStabilityFix?.diagnostics()"),
    )

    titles = project_titles()
    record("Thirteen native project cards are rendered", len(titles) == 13, titles)
    record("Approved Antmel project appears exactly once", titles.count(TITLE) == 1, titles)

    text = main_text()
    record("Project summary shows 59 participations", "59 Participaciones registradas" in text, text[:1200])
    record("Project summary shows 11 approved projects", "11 Proyectos aprobados destacados" in text, text[:1200])

    set_input_value("kernel-project-search", "Análisis dinámico y estabilidad de métodos")
    select_visible_text("kernel-project-status", "Aprobado")
    select_visible_text("kernel-project-researcher", "Antmel Rodríguez Cabral")

    wait.until(lambda current: len(current.find_elements(By.CSS_SELECTOR, "#main .kernel-project-list .kernel-project-card")) == 1)
    wait.until(lambda current: normalize(current.find_element(By.CSS_SELECTOR, "#main .kernel-research-count").text) == "1 resultado")
    driver.execute_script("window.KernelProjectNativeStabilityFix.apply()")
    time.sleep(0.35)

    filtered_titles = project_titles()
    filtered_text = main_text()
    record("Combined filters return one project", len(filtered_titles) == 1, filtered_titles)
    record("Combined filters return Antmel's approved project", filtered_titles == [TITLE], filtered_titles)
    record("Filtered result displays the approved status", "Aprobado" in filtered_text, filtered_text[-1800:])
    record("Filtered result displays Antmel Rodríguez Cabral", "Antmel Rodríguez Cabral" in filtered_text, filtered_text[-1800:])
    record("Filtered result displays the UASD amount", "RD$ 1,286,178.40" in filtered_text, filtered_text[-1800:])
    record("Empty-state message is absent", "No hay proyectos que coincidan" not in filtered_text, filtered_text[-1000:])

    result_count = normalize(driver.find_element(By.CSS_SELECTOR, "#main .kernel-research-count").text)
    record("Filtered result counter is grammatically correct", result_count == "1 resultado", result_count)

    duplicate_details = driver.execute_script(
        """
        const title = arguments[0];
        const card = [...document.querySelectorAll('#main .kernel-project-list .kernel-project-card')]
          .find(item => item.querySelector('h2,h3')?.textContent.replace(/\s+/g,' ').trim() === title);
        return {
          direct: card ? [...card.children].filter(child => child.hasAttribute('data-kernel-antmel-project-details')).length : -1,
          total: document.querySelectorAll('#main [data-kernel-antmel-project-details]').length
        };
        """,
        TITLE,
    )
    record("Antmel extended details appear only once", duplicate_details == {"direct": 1, "total": 1}, duplicate_details)

    driver.save_screenshot(str(RESULT_DIR / "native-antmel-project-mobile.png"))

    severe = [
        entry
        for entry in driver.get_log("browser")
        if entry.get("level") == "SEVERE" and "favicon" not in entry.get("message", "").lower()
    ]
    record("No severe JavaScript errors", not severe, severe)

except Exception as error:  # noqa: BLE001
    report["exception"] = {
        "type": type(error).__name__,
        "message": str(error),
        "traceback": traceback.format_exc(),
        "url": driver.current_url,
    }
    report["failures"].append("exception")
    try:
        driver.save_screenshot(str(RESULT_DIR / "exception.png"))
    except Exception:  # noqa: BLE001
        pass
finally:
    save()
    driver.quit()

print(json.dumps(report, indent=2, ensure_ascii=False))
if report["failures"]:
    raise SystemExit("Native Antmel project failures: " + ", ".join(dict.fromkeys(report["failures"])))
