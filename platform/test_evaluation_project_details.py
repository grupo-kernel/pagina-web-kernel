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
RESULT_DIR = Path(os.environ.get("PROJECT_RESULT_DIR", "ci-evaluation-project-details"))
RESULT_DIR.mkdir(parents=True, exist_ok=True)
RESULT_PATH = RESULT_DIR / "result.json"

report: dict[str, object] = {"checks": {}, "failures": [], "exception": None}

options = Options()
for argument in [
    "--headless=new",
    "--no-sandbox",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--window-size=1440,2000",
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


def apply_project_details() -> None:
    result = driver.execute_async_script(
        """
        const done = arguments[0];
        Promise.resolve(window.KernelEvaluationProjectDetails.apply())
          .then(value => done({ok:true, value}))
          .catch(error => done({ok:false, error:String(error)}));
        """
    )
    if not result.get("ok"):
        raise RuntimeError(result.get("error") or "Project detail application failed")


def set_language(language: str) -> None:
    driver.execute_script("window.KernelI18nController.apply(arguments[0])", language)
    driver.execute_async_script(
        """
        const done = arguments[0];
        Promise.resolve(window.KernelStableLanguage.applyAll())
          .then(() => done(true))
          .catch(error => done(String(error)));
        """
    )
    wait.until(lambda current: not current.execute_script("return document.documentElement.classList.contains('kernel-language-updating')"))
    apply_project_details()
    time.sleep(0.3)


def open_projects(language: str) -> None:
    driver.get(f"{BASE_URL}/#/home")
    wait.until(lambda current: current.execute_script("return document.readyState") == "complete")
    wait.until(
        lambda current: current.execute_script(
            "return Boolean(window.KernelI18nController && window.KernelStableLanguage && window.KernelEvaluationProjectDetails)"
        )
    )
    set_language(language)
    driver.execute_script("location.hash = '#/proyectos'")
    wait.until(lambda current: len(current.find_elements(By.CSS_SELECTOR, ".kernel-project-card")) >= 13)
    driver.execute_async_script(
        """
        const done = arguments[0];
        Promise.resolve(window.KernelStableLanguage.applyAll())
          .then(() => done(true))
          .catch(error => done(String(error)));
        """
    )
    apply_project_details()
    wait.until(lambda current: len(current.find_elements(By.CSS_SELECTOR, '[data-kernel-evaluation-project="true"]')) == 2)
    time.sleep(0.35)


def cards() -> dict[str, dict[str, object]]:
    return driver.execute_script(
        r"""
        return Object.fromEntries([...document.querySelectorAll('[data-kernel-evaluation-project="true"]')].map(card => [
          card.dataset.kernelProjectId,
          {
            title: card.querySelector('h2')?.textContent?.replace(/\s+/g,' ').trim() || '',
            overview: card.querySelector('[data-kernel-project-overview]')?.textContent?.replace(/\s+/g,' ').trim() || '',
            details: [...card.querySelectorAll('.kernel-project-detail')].map(item => ({
              label: item.querySelector('strong')?.textContent?.trim() || '',
              value: item.textContent.replace(item.querySelector('strong')?.textContent || '', '').replace(/\s+/g,' ').trim()
            })),
            members: [...card.querySelectorAll('.kernel-project-people a')].map(link => link.textContent.replace(/\s+/g,' ').trim()),
            other: card.querySelector('.kernel-project-other-members')?.textContent?.replace(/\s+/g,' ').trim() || ''
          }
        ]));
        """
    )


try:
    open_projects("es")
    spanish = cards()
    nutrients = spanish.get("fondocyt-transporte-nutrientes", {})
    optimization = spanish.get("fondocyt-optimizacion-hibrida-redes-econometria", {})

    record("Two enriched proposals are visible", len(spanish) == 2, spanish)
    record(
        "Official nutrient-transport project title is displayed",
        nutrients.get("title") == "Métodos iterativos de alto orden para la resolución de EDPs no lineales y su aplicación a la modelización del transporte de nutrientes en sustratos biológicos",
        nutrients.get("title"),
    )
    record(
        "Official optimization project title is displayed without La Salle",
        optimization.get("title") == "Diseño y análisis de métodos híbridos de optimización con aplicación en entrenamientos de redes neuronales convolucionales y en la modelización econométrico-financiera"
        and "La Salle" not in json.dumps(spanish, ensure_ascii=False),
        optimization.get("title"),
    )

    nutrient_details = {item["label"]: item["value"] for item in nutrients.get("details", [])}
    optimization_details = {item["label"]: item["value"] for item in optimization.get("details", [])}
    record("Nutrient project total amount is shown", nutrient_details.get("Monto total del proyecto") == "RD$ 11,955,975.84", nutrient_details)
    record("Nutrient project FONDOCyT and counterpart amounts are shown", nutrient_details.get("Aporte FONDOCyT") == "RD$ 9,115,545.17" and nutrient_details.get("Contrapartida institucional") == "RD$ 2,840,430.67", nutrient_details)
    record("Optimization project total amount is shown", optimization_details.get("Monto total del proyecto") == "RD$ 9,790,999.20", optimization_details)
    record("Optimization project FONDOCyT and counterpart amounts are shown", optimization_details.get("Aporte FONDOCyT") == "RD$ 7,647,972.35" and optimization_details.get("Contrapartida institucional") == "RD$ 2,143,026.85", optimization_details)
    record("Both proposals include a concise project overview", "difusión y el transporte de nutrientes" in nutrients.get("overview", "") and "métodos híbridos de optimización" in optimization.get("overview", ""), {"nutrients": nutrients.get("overview"), "optimization": optimization.get("overview")})
    record("Kernel members retain the group order", [item.split(" · ")[0] for item in nutrients.get("members", [])] == ["Miguel A. Leonardo Sepúlveda", "Natanael Ureña Castillo"] and [item.split(" · ")[0] for item in optimization.get("members", [])] == ["Miguel A. Leonardo Sepúlveda", "Natanael Ureña Castillo", "Antmel Rodríguez Cabral"], {"nutrients": nutrients.get("members"), "optimization": optimization.get("members")})
    record("Other project participants are listed", all(name in nutrients.get("other", "") for name in ["Neel Lobatchewski Báez Ureña", "Juan Ramón Torregrosa Sánchez", "Yaset Rodríguez Rodríguez", "Luis De Francisco"]) and all(name in optimization.get("other", "") for name in ["Alicia Cordero Barbero", "Juan Ramón Torregrosa Sánchez"]), {"nutrients": nutrients.get("other"), "optimization": optimization.get("other")})
    driver.save_screenshot(str(RESULT_DIR / "projects-evaluation-es.png"))

    set_language("en")
    wait.until(
        lambda current: current.execute_script(
            """
            const cards = [...document.querySelectorAll('[data-kernel-evaluation-project="true"]')];
            return cards.length === 2 &&
              cards.every(card => card.querySelector('[data-kernel-project-overview] strong')?.textContent.trim() === 'Project overview') &&
              cards.every(card => [...card.querySelectorAll('.kernel-project-detail strong')].some(label => label.textContent.trim() === 'Total project amount'));
            """
        )
    )
    english = cards()
    record("English mode translates both official project cards", english["fondocyt-transporte-nutrientes"]["title"].startswith("High-order iterative methods") and english["fondocyt-optimizacion-hibrida-redes-econometria"]["title"].startswith("Design and analysis of hybrid optimization methods") and all("Total project amount" in [item["label"] for item in card["details"]] for card in english.values()), english)
    driver.save_screenshot(str(RESULT_DIR / "projects-evaluation-en.png"))

    severe = [
        entry for entry in driver.get_log("browser")
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
finally:
    save()
    driver.quit()

print(json.dumps(report, indent=2, ensure_ascii=False))
if report["failures"]:
    raise SystemExit("Evaluation project detail failures: " + ", ".join(dict.fromkeys(report["failures"])))
