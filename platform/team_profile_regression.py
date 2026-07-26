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

BASE_URL = os.environ.get("BASE_URL", "http://127.0.0.1:4177").rstrip("/")
RESULT_PATH = Path(os.environ.get("TEAM_PROFILE_RESULT", "ci-team-profile/result.json"))
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

try:
    driver.get(f"{BASE_URL}/#/home")
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-kernel-platform-page="home-2b"]')))
    wait.until(lambda current: current.execute_script(
        "return Boolean(window.KernelTeamProfileFix && window.KernelTeamProfileFix.diagnostics().preloaded >= 9)"
    ))
    diagnostics = driver.execute_script("return window.KernelTeamProfileFix.diagnostics()")
    record("Las nueve fotografías se precargan", diagnostics.get("preloaded", 0) >= 9, str(diagnostics))

    start = time.monotonic()
    driver.execute_script("location.hash='#/equipment'")
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-kernel-platform-page="team-nine"]')))
    wait.until(lambda current: len(current.find_elements(By.CSS_SELECTOR, ".kernel-team-core__card")) == 9)
    wait.until(lambda current: current.execute_script(
        "return [...document.querySelectorAll('.kernel-team-core__photo img')].length===9 && "
        "[...document.querySelectorAll('.kernel-team-core__photo img')].every(img => img.complete && img.naturalWidth > 0);"
    ))
    elapsed = time.monotonic() - start
    record("Equipo muestra nueve tarjetas", len(driver.find_elements(By.CSS_SELECTOR, ".kernel-team-core__card")) == 9)
    record("Las nueve fotografías cargan correctamente", True, f"tiempo={elapsed:.2f}s")
    record("Carga de fotografías sin demora prolongada", elapsed < 4.0, f"tiempo={elapsed:.2f}s")

    buttons = driver.find_elements(By.CSS_SELECTOR, "[data-kernel-team-open]")
    profile_ids = [button.get_attribute("data-kernel-team-open") for button in buttons]
    record("Hay nueve botones de perfil", len(profile_ids) == 9, f"botones={len(profile_ids)}")

    for profile_id in profile_ids:
        button = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, f'[data-kernel-team-open="{profile_id}"]')))
        expected_name = button.find_element(By.XPATH, "ancestor::article[1]").find_element(By.TAG_NAME, "h2").text.strip()
        driver.execute_script("arguments[0].click();", button)
        panel = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, f'[data-kernel-profile-panel="{profile_id}"]')))
        detail_name = panel.find_element(By.TAG_NAME, "h2").text.strip()
        current_url = driver.current_url
        record(
            f"Perfil abre: {profile_id}",
            profile_id in current_url and "#/equipment" in current_url and expected_name in detail_name,
            current_url,
        )
        record(
            f"El perfil no redirige a Portada: {profile_id}",
            driver.execute_script("return location.hash") == "#/equipment",
        )
        back = panel.find_element(By.CSS_SELECTOR, "[data-kernel-team-profile-back]")
        driver.execute_script("arguments[0].click();", back)
        wait.until(EC.invisibility_of_element_located((By.CSS_SELECTOR, "[data-kernel-profile-panel]")))

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

print(f"\nTEAM PROFILE RESULT: {'PASS' if not failures else 'FAIL'}")
for failure in failures:
    print(f"- {failure}")
raise SystemExit(1 if failures else 0)
