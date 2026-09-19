from __future__ import annotations

import json
import re
import time
from pathlib import Path

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait

BASE = "https://www.grupoelkernel.com/?audit=postmerge-team-i18n-20260727"
ROUTES = [
    "#/home",
    "#/diagnosticoServicios",
    "#/servicios",
    "#/laboratorioKernel",
    "#/herramientas",
    "#/quienesSomos",
    "#/equipment",
    "#/lineas",
    "#/proyectos",
    "#/publicaciones",
]
OUT = Path("ui-i18n-dom-audit")
OUT.mkdir(exist_ok=True)

options = Options()
for argument in [
    "--headless=new",
    "--no-sandbox",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--window-size=1440,1600",
]:
    options.add_argument(argument)
options.set_capability("goog:loggingPrefs", {"browser": "ALL"})

driver = webdriver.Chrome(options=options)
driver.set_page_load_timeout(90)
wait = WebDriverWait(driver, 60)
report: list[dict] = []
checks: dict[str, bool] = {}


def slug(route: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", route.lower()).strip("-") or "home"


def ready() -> None:
    wait.until(lambda d: d.execute_script("return document.readyState") == "complete")
    wait.until(lambda d: d.execute_script("return Boolean(document.getElementById('main'))"))
    time.sleep(2.6)


def body_text() -> str:
    return driver.execute_script("return (document.body.innerText || '').replace(/\\s+/g,' ').trim()")


try:
    driver.get(BASE + "#/home")
    ready()
    driver.execute_script(
        """
        localStorage.setItem('kernel-language','en');
        localStorage.setItem('language','en');
        localStorage.setItem('lang','en');
        document.documentElement.lang='en';
        """
    )
    driver.refresh()
    ready()

    for route in ROUTES:
        driver.execute_script("location.hash=arguments[0]", route)
        if route == "#/equipment":
            wait.until(lambda d: len(d.find_elements(By.CSS_SELECTOR, ".kernel-team-core__card")) == 9)
        time.sleep(2.8)
        driver.execute_script(
            """
            document.documentElement.lang='en';
            window.dispatchEvent(new CustomEvent('kernel-language-change', {detail:{language:'en'}}));
            document.dispatchEvent(new CustomEvent('kernel-language-change', {detail:{language:'en'}}));
            window.KernelUiI18nFinalizer?.apply?.();
            window.KernelSiteChromeLanguageFix?.apply?.();
            window.KernelTeamLanguageFix?.apply?.();
            window.KernelNameDegreeFix?.apply?.();
            """
        )
        time.sleep(1.5)
        data = driver.execute_script(
            """
            const root=document.getElementById('main');
            const normalize=value=>String(value||'').replace(/\s+/g,' ').trim();
            const nodes=[];
            const walker=document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
              acceptNode(node){
                if(!node.parentElement || ['SCRIPT','STYLE','CODE','PRE','TEXTAREA'].includes(node.parentElement.tagName)) return NodeFilter.FILTER_REJECT;
                return normalize(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
              }
            });
            while(walker.nextNode()){
              const node=walker.currentNode;
              const element=node.parentElement;
              const box=element.getBoundingClientRect();
              const style=getComputedStyle(element);
              nodes.push({
                text:normalize(node.nodeValue),
                tag:element.tagName.toLowerCase(),
                className:typeof element.className==='string'?element.className:'',
                id:element.id||'',
                role:element.getAttribute('role')||'',
                visible:box.width>0&&box.height>0&&style.display!=='none'&&style.visibility!=='hidden'
              });
            }
            return {html:root.innerHTML,textNodes:nodes};
            """
        )
        name = slug(route)
        (OUT / f"{name}.html").write_text(data["html"], encoding="utf-8")
        driver.save_screenshot(str(OUT / f"{name}.png"))
        route_text = body_text()
        report.append({"route": route, "url": driver.current_url, "textNodes": data["textNodes"], "text": route_text})

        if route == "#/home":
            header = driver.find_element(By.ID, "header").text
            checks["home_header_english"] = "Research and scientific services" in header and "Investigación y servicios científicos" not in header
        elif route == "#/equipment":
            headings = [element.text for element in driver.find_elements(By.CSS_SELECTOR, ".kernel-team-core__card h2")]
            duplicate = [heading for heading in headings if len(re.findall(r"(?:Ph\.D\.|M\.Sc\.)", heading)) > 1]
            jose = next((heading for heading in headings if heading.startswith("Jose Alberto Reyes Reyes")), "")
            checks["nine_team_cards"] = len(headings) == 9
            checks["no_repeated_degrees"] = not duplicate
            checks["jose_degree_once"] = jose.count("Ph.D.") == 1
            checks["team_english"] = "Researcher in numerical methods, PDEs, and mathematics education" in route_text and "Investigador en métodos numéricos" not in route_text
            checks["new_degree_module"] = driver.execute_script("return window.KernelNameDegreeFix?.version") == "1.2.0"
            checks["team_language_module"] = driver.execute_script("return window.KernelTeamLanguageFix?.version") == "1.0.0"
            report[-1]["headings"] = headings
            report[-1]["duplicateDegrees"] = duplicate
        elif route == "#/herramientas":
            checks["tools_english"] = "Academic Tools" in route_text and "Herramientas Académicas" not in route_text
        elif route == "#/laboratorioKernel":
            checks["laboratory_english"] = "Sign in" in route_text and "Iniciar sesión" not in route_text

    severe = [entry for entry in driver.get_log("browser") if entry.get("level") == "SEVERE" and "favicon" not in entry.get("message", "").lower()]
    checks["no_severe_javascript"] = not severe
finally:
    driver.quit()

payload = {"checks": checks, "ok": bool(checks) and all(checks.values()), "routes": report}
(OUT / "report.json").write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps({"checks": checks, "ok": payload["ok"]}, ensure_ascii=False, indent=2))
if not payload["ok"]:
    raise SystemExit(1)
