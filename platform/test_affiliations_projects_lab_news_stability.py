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
RESULT_DIR = Path(os.environ.get("RESULT_DIR", "ci-affiliations-projects-lab-news"))
RESULT_DIR.mkdir(parents=True, exist_ok=True)
RESULT_PATH = RESULT_DIR / "result.json"

EXPECTED_AFFILIATIONS = ["ITLA", "ISFODOSU", "UNAPEC"]
LAB_ENGLISH = ["Protected area", "Intelligent Laboratory access", "Email address", "Password", "Sign in"]
LAB_SPANISH_FORBIDDEN = ["Área protegida", "Acceso al Laboratorio Inteligente", "Correo electrónico", "Contraseña", "Iniciar sesión"]
NEWS_SPANISH_FORBIDDEN = [
    "Noticias del Grupo El Kernel",
    "Más detalles",
    "Datos principales",
    "Consultar sitio oficial",
    "El Grupo de Investigación",
    "Cerrar",
    "participará",
    "presentará",
    "concluyó",
    "Producción científica asociada",
    "Relevancia para El Kernel",
]

report: dict[str, object] = {
    "base_url": BASE_URL,
    "checks": {},
    "failures": [],
    "exception": None,
}

options = Options()
for argument in [
    "--headless=new",
    "--no-sandbox",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--window-size=1440,1800",
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
    print(f"{'PASS' if condition else 'FAIL'}: {name}{' — ' + str(detail) if detail is not None else ''}")
    save()


def normalize(value: str) -> str:
    return " ".join(str(value or "").split())


def body_text() -> str:
    return normalize(driver.execute_script("return document.body.innerText || ''"))


def wait_core() -> None:
    wait.until(lambda current: current.execute_script("return document.readyState") == "complete")
    wait.until(
        lambda current: current.execute_script(
            "return Boolean(window.KernelStableLanguage && window.KernelI18nController && window.KernelLabNewsLanguage && window.KernelDataAffiliationsProjectsFix)"
        )
    )
    wait.until(
        lambda current: current.execute_script(
            "return window.KernelUiI18nUnification?.diagnostics().translations >= 590 && window.KernelUiI18nFinalizer?.diagnostics().translations >= 590"
        )
    )
    wait.until(
        lambda current: current.execute_script(
            "return window.KernelLabNewsLanguage?.diagnostics().translations >= 230"
        )
    )


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
    wait.until(
        lambda current: current.execute_script(
            "return !document.documentElement.classList.contains('kernel-language-updating')"
        )
    )
    time.sleep(0.25)


def open_route(route: str, language: str = "es", selector: str | None = None) -> None:
    driver.get(f"{BASE_URL}/#/home")
    wait_core()
    set_language(language)
    driver.execute_script("location.hash = arguments[0]", f"#/{route}")
    if selector:
        wait.until(lambda current: current.find_elements(By.CSS_SELECTOR, selector))
    driver.execute_async_script(
        """
        const done = arguments[0];
        Promise.resolve(window.KernelStableLanguage.applyAll())
          .then(() => done(true))
          .catch(error => done(String(error)));
        """
    )
    wait.until(lambda current: not current.execute_script("return document.documentElement.classList.contains('kernel-language-updating')"))
    time.sleep(0.35)


def visible_dialog_text() -> str:
    return normalize(
        driver.execute_script(
            """
            const visible = element => {
              const style = getComputedStyle(element);
              const box = element.getBoundingClientRect();
              return box.width > 320 && box.height > 220 && style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity) !== 0;
            };
            const candidates = [...document.querySelectorAll('[role="dialog"],[aria-modal="true"],.fixed.inset-0,body>div')]
              .filter(element => visible(element) && String(element.innerText || '').trim());
            const ranked = candidates.map(element => ({
              element,
              score: (parseInt(getComputedStyle(element).zIndex) || 0) * 1000000 + element.getBoundingClientRect().width * element.getBoundingClientRect().height
            })).sort((a,b) => b.score - a.score);
            return ranked[0]?.element?.innerText || '';
            """
        )
    )


def close_visible_dialog() -> None:
    driver.execute_script(
        """
        const visible = element => {
          const style = getComputedStyle(element);
          const box = element.getBoundingClientRect();
          return box.width > 0 && box.height > 0 && style.display !== 'none' && style.visibility !== 'hidden';
        };
        const buttons = [...document.querySelectorAll('button')].filter(button => visible(button));
        const close = buttons.reverse().find(button => /^(Close|Cerrar)$/i.test(String(button.innerText || button.getAttribute('aria-label') || '').trim()));
        close?.click();
        """
    )
    time.sleep(0.25)


def mutation_count(milliseconds: int = 1500) -> int:
    return int(
        driver.execute_async_script(
            """
            const milliseconds = arguments[0];
            const done = arguments[1];
            let count = 0;
            const targets = [document.getElementById('header'), document.getElementById('main'), document.getElementById('footer')].filter(Boolean);
            const observer = new MutationObserver(records => {
              count += records.filter(record => record.type === 'characterData').length;
            });
            targets.forEach(target => observer.observe(target, {subtree:true, characterData:true}));
            window.setTimeout(() => { observer.disconnect(); done(count); }, milliseconds);
            """,
            milliseconds,
        )
    )


try:
    driver.get(f"{BASE_URL}/#/home")
    wait_core()

    versions = driver.execute_script(
        """
        return {
          controller: window.KernelI18nController?.version,
          coordinator: window.KernelStableLanguage?.version,
          finalizer: window.KernelUiI18nFinalizer?.version,
          watchdog: window.KernelUiI18nWatchdog?.version,
          labNews: window.KernelLabNewsLanguage?.version,
          dataFix: window.KernelDataAffiliationsProjectsFix?.version,
          tools: window.KernelToolsEnglishContent?.version,
          spanish: window.KernelSpanishRestoration?.version,
          chrome: window.KernelSiteChromeLanguageFix?.version,
          unification: window.KernelUiI18nUnification?.version
        };
        """
    )
    record("New deterministic modules load", all(versions.values()), versions)

    fetched = driver.execute_async_script(
        """
        const done = arguments[0];
        Promise.all([
          fetch('./core/data/researchers.v2.json', {cache:'no-store'}).then(response => response.json()),
          fetch('./core/data/projects.v2.json', {cache:'no-store'}).then(response => response.json())
        ]).then(([researchers, projects]) => done({researchers, projects})).catch(error => done({error:String(error)}));
        """
    )
    miguel = next(item for item in fetched["researchers"]["researchers"] if item["id"] == "miguel-leonardo")
    proposals = fetched["projects"].get("proposals", [])
    under_review = [item for item in proposals if item.get("status") == "under-review"]
    record("Miguel data has exactly three requested affiliations", miguel.get("affiliations") == EXPECTED_AFFILIATIONS, miguel.get("affiliations"))
    record("Project catalog contains two proposal records under review", len(under_review) == 2, [item.get("title") for item in under_review])
    record("Project summary and catalog agree", fetched["projects"]["summary"].get("proposals_under_review") == len(under_review) == 2)

    set_language("en")
    footer_text = normalize(driver.find_element(By.ID, "footer").text)
    footer_institutions = driver.execute_script(
        "return [...document.querySelectorAll('#footer [data-kernel-institution]')].map(element => element.textContent.trim())"
    )
    record("Footer shows ITLA · ISFODOSU · UNAPEC in order", footer_institutions == EXPECTED_AFFILIATIONS, footer_institutions)
    record("Footer no longer shows UASD in Miguel affiliation strip", "UASD" not in footer_institutions)
    footer_forbidden = [value for value in ["Confidencialidad", "Integridad académica", "Protección de datos", "Reproducibilidad", "República Dominicana"] if value in footer_text]
    record("Lower footer is English", not footer_forbidden and all(value in footer_text for value in ["Confidentiality", "Academic integrity", "Data protection", "Reproducibility", "Dominican Republic"]), {"forbidden": footer_forbidden, "text": footer_text})

    open_route("equipment", "en", ".kernel-team-core__card")
    wait.until(lambda current: len(current.find_elements(By.CSS_SELECTOR, ".kernel-team-core__card")) == 9)
    miguel_card = driver.execute_script(
        """
        const card = [...document.querySelectorAll('.kernel-team-core__card')].find(item => (item.querySelector('h2')?.textContent || '').includes('Miguel A. Leonardo Sepúlveda'));
        return card?.querySelector('.kernel-team-core__affiliations')?.textContent?.trim() || '';
        """
    )
    record("Miguel team card shows all three affiliations", miguel_card == "ITLA · ISFODOSU · UNAPEC", miguel_card)

    open_route("proyectos", "en", ".kernel-project-card")
    wait.until(lambda current: len(current.find_elements(By.CSS_SELECTOR, ".kernel-project-card")) >= 12)
    project_text = body_text()
    proposal_cards = driver.execute_script(
        """
        return [...document.querySelectorAll('.kernel-project-card')].filter(card =>
          [...card.querySelectorAll('.kernel-research-chip')].some(chip => /Under review|En evaluación/i.test(chip.textContent))
        ).map(card => card.querySelector('h2')?.textContent?.trim());
        """
    )
    record("Research Projects displays both proposals under review", len(proposal_cards) == 2, proposal_cards)
    record("Both proposal titles are English in English mode", all(not title.startswith("Diseño") for title in proposal_cards), proposal_cards)
    record("Project page reports two proposals under review", "2" in project_text and "Proposals under review" in project_text)

    open_route("laboratorioKernel", "en", "#kernel-login")
    lab_text = body_text()
    record("Intelligent Laboratory public access is English", all(value in lab_text for value in LAB_ENGLISH), lab_text)
    record("Intelligent Laboratory has no remaining Spanish login labels", not [value for value in LAB_SPANISH_FORBIDDEN if value in lab_text], [value for value in LAB_SPANISH_FORBIDDEN if value in lab_text])
    lab_snapshot_1 = normalize(driver.find_element(By.ID, "main").text)
    time.sleep(0.8)
    lab_snapshot_2 = normalize(driver.find_element(By.ID, "main").text)
    lab_mutations = mutation_count(1400)
    record("Laboratory text remains stable after translation", lab_snapshot_1 == lab_snapshot_2 and lab_mutations == 0, {"mutations": lab_mutations})

    open_route("noticias", "en", "[data-news-btn]")
    news_text = body_text()
    visible_forbidden = [value for value in NEWS_SPANISH_FORBIDDEN if value in news_text]
    record("News page is English", "El Kernel Research Group News" in news_text and not visible_forbidden, {"forbidden": visible_forbidden})

    news_ids = driver.execute_script("return [...new Set([...document.querySelectorAll('[data-news-btn]')].map(button => button.dataset.newsBtn))]")
    modal_results: list[dict[str, object]] = []
    for news_id in news_ids:
        button = driver.find_element(By.CSS_SELECTOR, f'[data-news-btn="{news_id}"]')
        driver.execute_script("arguments[0].click()", button)
        wait.until(lambda current: len(visible_dialog_text()) > 120)
        driver.execute_async_script(
            """
            const done=arguments[0];
            Promise.resolve(window.KernelStableLanguage.applyAll()).then(()=>done(true)).catch(error=>done(String(error)));
            """
        )
        time.sleep(0.25)
        modal_text = visible_dialog_text()
        forbidden = [value for value in NEWS_SPANISH_FORBIDDEN if value in modal_text]
        modal_results.append({"id": news_id, "english": "Close" in modal_text, "forbidden": forbidden, "length": len(modal_text)})
        close_visible_dialog()

    record("All unique news details were inspected", len(news_ids) >= 11 and len(modal_results) == len(news_ids), modal_results)
    record("Every news detail is English", all(item["english"] and not item["forbidden"] for item in modal_results), modal_results)
    news_snapshot_1 = normalize(driver.find_element(By.ID, "main").text)
    time.sleep(0.8)
    news_snapshot_2 = normalize(driver.find_element(By.ID, "main").text)
    news_mutations = mutation_count(1400)
    record("News text remains stable without flicker", news_snapshot_1 == news_snapshot_2 and news_mutations == 0, {"mutations": news_mutations})

    diagnostics = driver.execute_script(
        """
        return {
          finalizer: window.KernelUiI18nFinalizer?.diagnostics(),
          watchdog: window.KernelUiI18nWatchdog?.diagnostics(),
          tools: window.KernelToolsEnglishContent?.diagnostics(),
          spanish: window.KernelSpanishRestoration?.diagnostics(),
          chrome: window.KernelSiteChromeLanguageFix?.diagnostics(),
          unification: window.KernelUiI18nUnification?.diagnostics(),
          coordinator: window.KernelStableLanguage?.diagnostics()
        };
        """
    )
    no_polling = all(value and value.get("polling") is False for key, value in diagnostics.items() if key != "coordinator")
    no_polling = no_polling and diagnostics.get("coordinator", {}).get("polling") is False
    record("Translation layers report no polling loops", no_polling, diagnostics)

    set_language("es")
    spanish_text = body_text()
    record("Spanish restores correctly after English", "Noticias del Grupo El Kernel" in spanish_text and "El Kernel Research Group News" not in spanish_text)
    footer_es = normalize(driver.find_element(By.ID, "footer").text)
    record("Footer principles restore to Spanish", all(value in footer_es for value in ["Confidencialidad", "Integridad académica", "Protección de datos", "Reproducibilidad"]), footer_es)

    severe = [
        entry for entry in driver.get_log("browser")
        if entry.get("level") == "SEVERE" and "favicon" not in entry.get("message", "").lower()
    ]
    record("No severe JavaScript errors", not severe, severe)

    driver.set_window_size(390, 844)
    open_route("laboratorioKernel", "en", "#kernel-login")
    record("English Laboratory remains usable on mobile", all(value in body_text() for value in ["Email address", "Password", "Sign in"]))
    driver.save_screenshot(str(RESULT_DIR / "laboratory-mobile-en.png"))

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
    try:
        driver.quit()
    except Exception:  # noqa: BLE001
        pass

print(json.dumps(report, indent=2, ensure_ascii=False))
if report["failures"]:
    raise SystemExit("Regression failures: " + ", ".join(dict.fromkeys(report["failures"])))
