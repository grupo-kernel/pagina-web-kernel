from __future__ import annotations

import os
import time
from pathlib import Path

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait

BASE_URL = os.environ.get("BASE_URL", "http://127.0.0.1:4199").rstrip("/")
RESULT_DIR = Path(os.environ.get("LOGO_RESULT_DIR", "ci-global-logo"))
RESULT_DIR.mkdir(parents=True, exist_ok=True)

options = Options()
for argument in [
    "--headless=new",
    "--no-sandbox",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--window-size=1440,1200",
]:
    options.add_argument(argument)

browser = webdriver.Chrome(options=options)
wait = WebDriverWait(browser, 60)

try:
    browser.get(f"{BASE_URL}/#/home")
    wait.until(lambda driver: driver.execute_script("return document.readyState") == "complete")
    wait.until(lambda driver: driver.execute_script("return Boolean(window.KernelGlobalLogoFix)"))
    wait.until(lambda driver: len(driver.find_elements(By.CSS_SELECTOR, "img[data-kernel-logo-version='20260728-1']")) >= 2)
    time.sleep(0.3)

    data = browser.execute_script("return window.KernelGlobalLogoFix.diagnostics()")
    assert len(data["images"]) >= 2, data
    assert all("logo-el-kernel-20260728.svg" in item["src"] for item in data["images"]), data
    assert any("logo-el-kernel-20260728.svg" in item for item in data["favicons"]), data
    assert browser.execute_script("return Boolean(document.querySelector('#header img[data-kernel-logo-version]'))")
    assert browser.execute_script("return Boolean(document.querySelector('#footer img[data-kernel-logo-version]'))")

    browser.save_screenshot(str(RESULT_DIR / "global-logo-desktop.png"))

    browser.set_window_size(390, 844)
    time.sleep(0.4)
    browser.execute_script("window.KernelGlobalLogoFix.apply()")
    assert browser.execute_script("return document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2")
    browser.save_screenshot(str(RESULT_DIR / "global-logo-mobile.png"))
finally:
    browser.quit()
