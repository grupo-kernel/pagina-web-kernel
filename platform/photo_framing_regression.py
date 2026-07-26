from __future__ import annotations

import json
import os
from pathlib import Path

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

BASE_URL = os.environ.get("BASE_URL", "http://127.0.0.1:4177").rstrip("/")
RESULT_PATH = Path(os.environ.get("PHOTO_FRAMING_RESULT", "ci-photo-framing/result.json"))
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
wait = WebDriverWait(driver, 35)


def portrait_metrics(selector: str) -> list[dict[str, object]]:
    return driver.execute_script(
        "return [...document.querySelectorAll(arguments[0])].map(image => {"
        " const frame=image.parentElement;"
        " const imageStyle=getComputedStyle(image);"
        " const frameBox=frame.getBoundingClientRect();"
        " return {"
        "  src:image.getAttribute('src') || '',"
        "  complete:image.complete,"
        "  naturalWidth:image.naturalWidth,"
        "  naturalHeight:image.naturalHeight,"
        "  objectFit:imageStyle.objectFit,"
        "  objectPosition:imageStyle.objectPosition,"
        "  frameWidth:frameBox.width,"
        "  frameHeight:frameBox.height,"
        "  ratio:frameBox.height ? frameBox.width/frameBox.height : 0,"
        "  marked:image.dataset.kernelFullPortrait === 'true'"
        " };"
        "});",
        selector,
    )


def valid_portraits(metrics: list[dict[str, object]]) -> bool:
    return bool(metrics) and all(
        item["complete"]
        and int(item["naturalWidth"]) > 0
        and int(item["naturalHeight"]) > 0
        and item["objectFit"] == "contain"
        and item["marked"]
        and 0.76 <= float(item["ratio"]) <= 0.84
        for item in metrics
    )


try:
    driver.get(f"{BASE_URL}/#/equipment")
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-kernel-platform-page="team-nine"]')))
    wait.until(lambda current: len(current.find_elements(By.CSS_SELECTOR, ".kernel-team-core__card")) == 9)
    wait.until(lambda current: current.execute_script(
        "return Boolean(window.KernelPhotoFramingFix) && "
        "document.querySelectorAll('.kernel-team-core__photo img[data-kernel-full-portrait=\"true\"]').length === 9;"
    ))

    card_metrics = portrait_metrics(".kernel-team-core__photo img")
    record("Nueve retratos completos en Equipo", len(card_metrics) == 9, str(card_metrics))
    record("Equipo usa object-fit contain y proporción 4:5", valid_portraits(card_metrics), str(card_metrics))

    first_button = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, "[data-kernel-team-open]")))
    driver.execute_script("arguments[0].click();", first_button)
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "[data-kernel-profile-panel]")))
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, ".kernel-team-core__detail-photo img")))

    detail_metrics = portrait_metrics(".kernel-team-core__detail-photo img")
    record("Perfil completo conserva la fotografía íntegra", valid_portraits(detail_metrics), str(detail_metrics))

    driver.get(f"{BASE_URL}/?kernelSection=formacion#/quienesSomos")
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-kernel-platform-page="academic-background"]')))
    wait.until(lambda current: len(current.find_elements(By.CSS_SELECTOR, ".kernel-academic-person")) == 9)
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, ".kernel-academic-profile-photo img")))

    academic_profile = portrait_metrics(".kernel-academic-profile-photo img")
    record("Formación muestra el retrato principal completo", valid_portraits(academic_profile), str(academic_profile))

    driver.set_window_size(390, 844)
    wait.until(lambda current: current.execute_script(
        "const image=document.querySelector('.kernel-academic-profile-photo img');"
        "return image && getComputedStyle(image).objectFit === 'contain';"
    ))
    mobile_profile = portrait_metrics(".kernel-academic-profile-photo img")
    record("Encuadre 4:5 se conserva en móvil", valid_portraits(mobile_profile), str(mobile_profile))

    severe = [
        entry for entry in driver.get_log("browser")
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
        ) + "\n",
        encoding="utf-8",
    )
    driver.quit()

print(f"\nPHOTO FRAMING RESULT: {'PASS' if not failures else 'FAIL'}")
for failure in failures:
    print(f"- {failure}")
raise SystemExit(1 if failures else 0)
