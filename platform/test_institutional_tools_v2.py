from __future__ import annotations

import asyncio
import json
import os
from pathlib import Path
from typing import Any

from playwright.async_api import async_playwright, Page

BASE_URL = os.environ.get("BASE_URL", "http://127.0.0.1:4173/").rstrip("/") + "/"
RESULT_PATH = Path(os.environ.get("TOOLS_RESULT", "ci-results/institutional-tools-v2.json"))
SCREENSHOT_DIR = Path(os.environ.get("TOOLS_SCREENSHOTS", "ci-results/institutional-tools-v2-screenshots"))
SCREENSHOT_DIR.mkdir(parents=True, exist_ok=True)

result: dict[str, Any] = {"base_url": BASE_URL, "passed": False, "checks": [], "failures": []}


def check(name: str, condition: bool, detail: str = "") -> None:
    result["checks"].append({"name": name, "passed": bool(condition), "detail": detail})
    if not condition:
        result["failures"].append(f"{name}: {detail}")


async def visit(page: Page, route: str) -> None:
    target = BASE_URL + route.lstrip("/")
    response = await page.goto(target, wait_until="networkidle", timeout=60_000)
    same_document_navigation = response is None and page.url == target
    ok = bool(response and response.ok) or same_document_navigation
    status = response.status if response else "same-document"
    check(f"HTTP {route}", ok, f"status={status}")
    await page.wait_for_timeout(1800)


async def click_text_card(page: Page, text: str) -> bool:
    locator = page.get_by_text(text, exact=False)
    count = await locator.count()
    for index in range(count):
        candidate = locator.nth(index)
        try:
            visible = await candidate.is_visible()
            if not visible:
                continue
            clicked = await candidate.evaluate("""element => {
                const target = element.closest('button,a,[role="button"],[data-tool],[data-institution]') || element;
                target.click();
                return true;
            }""")
            if clicked:
                await page.wait_for_timeout(1600)
                return True
        except Exception:
            continue
    return False


async def main() -> None:
    requested: list[str] = []
    async with async_playwright() as playwright:
        browser = await playwright.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1440, "height": 1000})
        page.on("response", lambda response: requested.append(response.url))

        await visit(page, "#/herramientas")
        tools_text = await page.locator("body").inner_text()
        check("Tarjeta Xmera disponible", "Xmera" in tools_text, "No aparece Xmera en Herramientas")
        check("Tarjeta Banner disponible", "Banner" in tools_text, "No aparece Banner en Herramientas")
        await page.screenshot(path=str(SCREENSHOT_DIR / "01-tools-home.png"), full_page=True)

        xmera_clicked = await click_text_card(page, "Xmera")
        xmera_text = await page.locator("body").inner_text()
        xmera_inputs = await page.locator("textarea,input").count()
        check("Abrir ITLA · Xmera", xmera_clicked, "No se encontró un control seleccionable para Xmera")
        check("Interfaz de Xmera cargada", "Xmera" in xmera_text and "ITLA" in xmera_text, "La interfaz no identifica ITLA · Xmera")
        check("Xmera ofrece entrada de datos", xmera_inputs > 0, f"campos={xmera_inputs}")
        await page.screenshot(path=str(SCREENSHOT_DIR / "02-xmera.png"), full_page=True)

        await visit(page, "#/herramientas")
        banner_clicked = await click_text_card(page, "Banner")
        banner_text = await page.locator("body").inner_text()
        check("Abrir UNAPEC · Banner", banner_clicked, "No se encontró un control seleccionable para Banner")
        for token in ("1AC", "2PP", "3SP", "4EF"):
            check(f"Banner conserva {token}", token in banner_text, f"No aparece {token}")

        if not await page.locator("#banner-primer-input").count() and await page.locator("#open-primer-periodo").count():
            await page.locator("#open-primer-periodo").click()
            await page.wait_for_timeout(600)

        if await page.locator("#banner-primer-input").count():
            await page.locator("#banner-primer-input").fill("A00108671\t10\t15")
            await page.locator("#banner-primer-process").click()
            await page.wait_for_timeout(500)
            message = await page.locator("#banner-primer-message").inner_text()
            preview_rows = await page.locator("#banner-primer-preview tr").count()
            check("Banner valida datos de muestra", "valid" in message.lower(), message)
            check("Banner genera vista previa", preview_rows == 1, f"filas={preview_rows}")
        else:
            check("Formulario del primer corte Banner", False, "No se encontró #banner-primer-input")
        await page.screenshot(path=str(SCREENSHOT_DIR / "03-banner.png"), full_page=True)

        requested.clear()
        await visit(page, "#/laboratorioKernel")
        laboratory_text = (await page.locator("body").inner_text()).lower()
        laboratory_or_login = any(token in laboratory_text for token in ("laboratorio", "iniciar sesión", "acceso", "asistente", "login"))
        auth_requested = any(any(token in url for token in ("authGuard-", "authService-", "firebase-")) for url in requested)
        laboratory_requested = any("LaboratorioKernel-" in url for url in requested)
        check("Ruta del Laboratorio responde", len(laboratory_text.strip()) > 150, f"caracteres={len(laboratory_text)}")
        check("Laboratorio o acceso autenticado visible", laboratory_or_login, "No aparece el Laboratorio ni su acceso")
        check("Autenticación del Laboratorio preservada", auth_requested or laboratory_requested, "No se observaron módulos de autenticación o Laboratorio")
        await page.screenshot(path=str(SCREENSHOT_DIR / "04-laboratory.png"), full_page=True)

        await page.set_viewport_size({"width": 390, "height": 844})
        await visit(page, "?kernelSection=formacion#/quienesSomos")
        await page.wait_for_selector('[data-kernel-platform-page="academic-background-v2"], [data-kernel-platform-page="academic-background"]', timeout=25_000)
        overflow = await page.evaluate("document.documentElement.scrollWidth - window.innerWidth")
        check("Formación responsive en móvil", overflow <= 2, f"desbordamiento={overflow}px")
        await page.screenshot(path=str(SCREENSHOT_DIR / "05-mobile-formation.png"), full_page=True)

        await page.evaluate("localStorage.setItem('kernel-language','en')")
        await page.reload(wait_until="networkidle")
        await page.wait_for_timeout(1800)
        english_text = await page.locator("body").inner_text()
        check("Formación disponible en inglés", "Academic background" in english_text or "Academic trajectories" in english_text, "No se detectó el contenido académico en inglés")
        await page.screenshot(path=str(SCREENSHOT_DIR / "06-english-formation.png"), full_page=True)

        await browser.close()

    result["passed"] = not result["failures"]
    RESULT_PATH.parent.mkdir(parents=True, exist_ok=True)
    RESULT_PATH.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    if not result["passed"]:
        raise SystemExit(1)


if __name__ == "__main__":
    asyncio.run(main())
