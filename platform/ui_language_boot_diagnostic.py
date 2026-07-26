from __future__ import annotations

import json
import os
import time
from pathlib import Path

from selenium import webdriver
from selenium.webdriver.chrome.options import Options

BASE_URL = os.environ.get("BASE_URL", "http://127.0.0.1:4191").rstrip("/")
OUTPUT = Path(os.environ.get("UI_LANGUAGE_BOOT_RESULT", "/tmp/kernel-ui-language-boot.json"))

options = Options()
for argument in ["--headless=new", "--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage", "--window-size=1440,1200"]:
    options.add_argument(argument)
options.set_capability("goog:loggingPrefs", {"browser": "ALL"})

driver = webdriver.Chrome(options=options)
driver.set_page_load_timeout(45)
snapshots: list[dict] = []
error = ""
try:
    driver.get(f"{BASE_URL}/#/home")
    for _ in range(20):
        state = driver.execute_script(
            """
            return {
              ready: document.readyState,
              version: window.KernelUILanguageUnification?.version || null,
              loading: Boolean(window.__KernelUILanguageUnificationLoading),
              data: {
                entries: window.__KernelUIData?.entries?.length || 0,
                researchers: Object.keys(window.__KernelUIData?.researchers || {}).length,
                lines: Object.keys(window.__KernelUIData?.lines || {}).length
              },
              lastLanguage: window.KernelUILanguageUnification?.diagnostics?.().lastLanguage || null,
              scripts: [...document.scripts].filter(s => /kernel-ui-language/.test(s.src)).map(s => s.src)
            };
            """
        )
        snapshots.append(state)
        print(json.dumps(state, ensure_ascii=False))
        if state.get("version") == "1.0.0":
            break
        time.sleep(1)
    logs = driver.get_log("browser")
except Exception as exc:  # noqa: BLE001
    error = f"{type(exc).__name__}: {exc}"
    logs = []
finally:
    OUTPUT.write_text(json.dumps({"error": error, "snapshots": snapshots, "browser": logs}, ensure_ascii=False, indent=2), encoding="utf-8")
    driver.quit()

if error or not snapshots or snapshots[-1].get("version") != "1.0.0":
    raise SystemExit(1)
