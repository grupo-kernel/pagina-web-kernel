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
RESULT_DIR = Path(os.environ.get("LAB_BACKGROUND_RESULT_DIR", "ci-laboratory-background"))
RESULT_DIR.mkdir(parents=True, exist_ok=True)
RESULT_PATH = RESULT_DIR / "result.json"

report: dict[str, object] = {"checks": {}, "failures": [], "exception": None}

options = Options()
for argument in [
    "--headless=new",
    "--no-sandbox",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--window-size=1440,1400",
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


def apply_background() -> object:
    return driver.execute_script("return window.KernelLaboratoryBackground.apply()")


try:
    driver.get(f"{BASE_URL}/#/laboratorioKernel")
    wait.until(lambda current: current.execute_script("return document.readyState") == "complete")
    wait.until(lambda current: current.find_elements(By.ID, "kernel-login"))
    wait.until(lambda current: current.execute_script("return Boolean(window.KernelLaboratoryBackground)"))
    apply_background()
    wait.until(lambda current: current.execute_script("return document.getElementById('main')?.classList.contains('kernel-lab-visual-page')"))
    time.sleep(0.4)

    diagnostics = driver.execute_script("return window.KernelLaboratoryBackground.diagnostics()")
    record("Laboratory background module is active", all(diagnostics.values()), diagnostics)

    visual = driver.execute_script(
        """
        const main = document.getElementById('main');
        const card = document.querySelector('.kernel-lab-access-card');
        const shell = document.querySelector('.kernel-lab-access-shell');
        const form = document.getElementById('kernel-login');
        const heading = card?.querySelector('h1');
        const cardBox = card?.getBoundingClientRect();
        const headingBox = heading?.getBoundingClientRect();
        return {
          mainBackground: getComputedStyle(main).backgroundImage,
          beforeBackground: getComputedStyle(main, '::before').backgroundImage,
          cardBackground: getComputedStyle(card).backgroundColor,
          cardBorderTop: getComputedStyle(card).borderTopColor,
          cardBackdrop: getComputedStyle(card).backdropFilter || getComputedStyle(card).webkitBackdropFilter,
          formVisible: Boolean(form && form.getBoundingClientRect().width > 200 && form.getBoundingClientRect().height > 200),
          shellWidth: shell?.getBoundingClientRect().width || 0,
          cardWidth: cardBox?.width || 0,
          cardHeight: cardBox?.height || 0,
          headingOffset: cardBox && headingBox ? headingBox.top - cardBox.top : 9999,
          overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth
        };
        """
    )
    record("Scientific background image is applied", "lab-science-background.svg" in visual["mainBackground"], visual)
    record("Neural-orbit decorative image is applied", "lab-neural-orbit.svg" in visual["beforeBackground"], visual)
    record("Login card remains readable and visible", visual["formVisible"] and "rgba(0, 0, 0, 0)" not in visual["cardBackground"], visual)
    record(
        "Login content starts near the top of the card",
        visual["headingOffset"] < 190 and visual["cardHeight"] < 1000,
        visual,
    )
    record("Desktop layout has no horizontal overflow", visual["overflow"] <= 2, visual)
    driver.save_screenshot(str(RESULT_DIR / "laboratory-background-desktop.png"))

    driver.set_window_size(390, 844)
    time.sleep(0.5)
    apply_background()
    mobile = driver.execute_script(
        """
        const card = document.querySelector('.kernel-lab-access-card');
        const main = document.getElementById('main');
        const heading = card?.querySelector('h1');
        const cardBox = card?.getBoundingClientRect();
        const headingBox = heading?.getBoundingClientRect();
        return {
          viewport: document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth,
          cardLeft: cardBox?.left || 0,
          cardRight: cardBox?.right || 0,
          cardHeight: cardBox?.height || 0,
          headingOffset: cardBox && headingBox ? headingBox.top - cardBox.top : 9999,
          mainBackground: getComputedStyle(main).backgroundImage
        };
        """
    )
    record(
        "Mobile layout keeps the card inside the viewport",
        mobile["scrollWidth"] <= mobile["viewport"] + 2
        and mobile["cardLeft"] >= -1
        and mobile["cardRight"] <= mobile["viewport"] + 1,
        mobile,
    )
    record(
        "Mobile login content has no artificial blank block",
        mobile["headingOffset"] < 190 and mobile["cardHeight"] < 1000,
        mobile,
    )
    driver.save_screenshot(str(RESULT_DIR / "laboratory-background-mobile.png"))

    severe = [
        entry for entry in driver.get_log("browser")
        if entry.get("level") == "SEVERE"
        and "favicon" not in entry.get("message", "").lower()
        and "firebase" not in entry.get("message", "").lower()
    ]
    record("No severe JavaScript errors from the visual module", not severe, severe)

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
    raise SystemExit("Laboratory background failures: " + ", ".join(dict.fromkeys(report["failures"])))
