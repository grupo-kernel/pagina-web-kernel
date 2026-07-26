from __future__ import annotations

import json
import os
from pathlib import Path

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

BASE_URL = os.environ.get("BASE_URL", "http://127.0.0.1:4182").rstrip("/")
RESULT_PATH = Path(os.environ.get("VISITOR_COUNTER_RESULT", "ci-visitor-counter/result.json"))
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
    "--window-size=1440,1200",
]:
    options.add_argument(argument)

options.set_capability("goog:loggingPrefs", {"browser": "ALL"})
driver = webdriver.Chrome(options=options)
driver.set_page_load_timeout(45)
wait = WebDriverWait(driver, 35)

mock_payload = {
    "ok": True,
    "actualizadoEn": "2026-07-26T14:30:00.000Z",
    "visitantes": {
        "total": 12345,
        "hoy": 67,
        "ultimos7Dias": 890,
        "ultimos30Dias": 3456,
    },
}

mock_script = f"""
(() => {{
  const originalFetch = window.fetch.bind(window);
  const payload = {json.dumps(mock_payload)};
  window.fetch = (input, init) => {{
    const url = String(input && input.url ? input.url : input);
    if (url.includes('script.google.com/macros/s/AKfycbwYOIXuZWC1HiU2_iTsk8ytuHa1NDtFGbjQsO_37SmtbKWUsdS4RUQOOEU7GHz0E4wU7Q/exec')) {{
      return Promise.resolve(new Response(JSON.stringify(payload), {{
        status: 200,
        headers: {{'Content-Type': 'application/json'}}
      }}));
    }}
    return originalFetch(input, init);
  }};
}})();
"""
driver.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {"source": mock_script})

try:
    driver.get(f"{BASE_URL}/#/home")
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-kernel-platform-page="home-2b"]')))
    section = wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, "[data-kernel-home-visitors]")))

    record("El contador aparece en la portada", section.is_displayed())
    record(
        "El contador se ubica dentro del contenido nuevo",
        driver.execute_script(
            "return Boolean(document.querySelector('[data-kernel-platform-page=\"home-2b\"] .kernel-home-2b__content [data-kernel-home-visitors]'));"
        ),
    )

    expected_values = {
        "total": "12345",
        "hoy": "67",
        "ultimos7Dias": "890",
        "ultimos30Dias": "3456",
    }
    for key, expected in expected_values.items():
        wait.until(lambda current, k=key, v=expected: current.execute_script(
            "return document.querySelector(`[data-counter-value=\"${arguments[0]}\"]`)?.dataset.value === arguments[1];",
            k,
            v,
        ))
        actual = driver.execute_script(
            "return document.querySelector(`[data-counter-value=\"${arguments[0]}\"]`)?.dataset.value || '';",
            key,
        )
        record(f"Valor del contador: {key}", actual == expected, f"valor={actual}")

    record(
        "El contador informa la actualización",
        "Actualizado" in driver.find_element(By.CSS_SELECTOR, "[data-counter-status]").text,
    )

    driver.execute_script("location.hash='#/equipment'")
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-kernel-platform-page="team-nine"]')))
    wait.until(lambda current: len(current.find_elements(By.CSS_SELECTOR, ".kernel-team-core__card")) == 9)

    badge_texts = [element.text.strip() for element in driver.find_elements(By.CSS_SELECTOR, ".kernel-team-core__badge")]
    record(
        "Las tarjetas internacionales usan la etiqueta breve",
        badge_texts.count("INVESTIGADOR INTERNACIONAL") >= 2,
        str(badge_texts),
    )
    record(
        "Las tarjetas no muestran Miembro de El Kernel",
        all("MIEMBRO DE EL KERNEL" not in value.upper() for value in badge_texts),
        str(badge_texts),
    )

    driver.execute_script(
        "document.querySelector('[data-kernel-team-open=\"alicia-cordero\"]')?.click();"
    )
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-kernel-profile-panel="alicia-cordero"]')))
    profile_badge = driver.find_element(
        By.CSS_SELECTOR,
        '[data-kernel-profile-panel="alicia-cordero"] .kernel-team-core__eyebrow',
    ).text.strip()
    record("El perfil internacional usa la etiqueta breve", profile_badge == "INVESTIGADOR INTERNACIONAL", profile_badge)

    driver.execute_script(
        "localStorage.setItem('kernel-language','en');"
        "document.documentElement.lang='en';"
        "window.dispatchEvent(new Event('kernel-language-change'));"
    )
    wait.until(lambda current: any(
        "INTERNATIONAL RESEARCHER" in element.text.upper()
        for element in current.find_elements(By.CSS_SELECTOR, ".kernel-team-core__badge")
    ))
    english_badges = [element.text.strip() for element in driver.find_elements(By.CSS_SELECTOR, ".kernel-team-core__badge")]
    record(
        "La etiqueta internacional en inglés es breve",
        all("MEMBER OF EL KERNEL" not in value.upper() for value in english_badges),
        str(english_badges),
    )

    driver.execute_script("location.hash='#/home'")
    wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, "[data-kernel-home-visitors]")))
    wait.until(lambda current: current.find_element(By.CSS_SELECTOR, f"#{'kernel-home-visitor-counter'}-title").text.strip() == "Site activity")
    record(
        "El contador cambia correctamente al inglés",
        driver.find_element(By.CSS_SELECTOR, "#kernel-home-visitor-counter-title").text.strip() == "Site activity",
    )

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

print(f"\nVISITOR COUNTER AND INTERNATIONAL LABEL RESULT: {'PASS' if not failures else 'FAIL'}")
for failure in failures:
    print(f"- {failure}")
raise SystemExit(1 if failures else 0)
