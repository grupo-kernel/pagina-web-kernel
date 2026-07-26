from __future__ import annotations

import json
import re
import time
from pathlib import Path

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait

BASE = "https://www.grupoelkernel.com/?audit=dom-i18n-20260726"
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

driver = webdriver.Chrome(options=options)
driver.set_page_load_timeout(90)
wait = WebDriverWait(driver, 45)
report: list[dict] = []


def slug(route: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", route.lower()).strip("-") or "home"


def ready() -> None:
    wait.until(lambda d: d.execute_script("return document.readyState") == "complete")
    wait.until(lambda d: d.execute_script("return Boolean(document.getElementById('main'))"))
    time.sleep(2.6)


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
        time.sleep(2.8)
        driver.execute_script(
            """
            document.documentElement.lang='en';
            window.dispatchEvent(new CustomEvent('kernel-language-change', {detail:{language:'en'}}));
            document.dispatchEvent(new CustomEvent('kernel-language-change', {detail:{language:'en'}}));
            """
        )
        time.sleep(1.2)
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
                ariaSelected:element.getAttribute('aria-selected'),
                ariaPressed:element.getAttribute('aria-pressed'),
                visible:box.width>0&&box.height>0&&style.display!=='none'&&style.visibility!=='hidden'
              });
            }
            const interactive=[...root.querySelectorAll('button,a,summary,[role="tab"],[aria-selected],[aria-pressed]')].map(element=>{
              const box=element.getBoundingClientRect(), style=getComputedStyle(element);
              return {
                outerHTML:element.outerHTML.slice(0,1600),
                text:normalize(element.innerText||element.textContent),
                tag:element.tagName.toLowerCase(),
                className:typeof element.className==='string'?element.className:'',
                id:element.id||'',
                role:element.getAttribute('role')||'',
                ariaSelected:element.getAttribute('aria-selected'),
                ariaPressed:element.getAttribute('aria-pressed'),
                backgroundColor:style.backgroundColor,
                backgroundImage:style.backgroundImage,
                color:style.color,
                borderColor:style.borderColor,
                borderRadius:style.borderRadius,
                visible:box.width>0&&box.height>0&&style.display!=='none'&&style.visibility!=='hidden'
              };
            });
            return {html:root.innerHTML,textNodes:nodes,interactive};
            """
        )
        name = slug(route)
        (OUT / f"{name}.html").write_text(data["html"], encoding="utf-8")
        driver.save_screenshot(str(OUT / f"{name}.png"))
        report.append({
            "route": route,
            "url": driver.current_url,
            "textNodes": data["textNodes"],
            "interactive": data["interactive"],
        })
finally:
    driver.quit()

(OUT / "report.json").write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps({item["route"]: len(item["textNodes"]) for item in report}, ensure_ascii=False, indent=2))
