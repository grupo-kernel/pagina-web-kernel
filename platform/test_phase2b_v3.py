from __future__ import annotations

import asyncio
import json
import os
from pathlib import Path
from typing import Any

from playwright.async_api import async_playwright, Page

BASE_URL = os.environ.get("BASE_URL", "http://127.0.0.1:4173/").rstrip("/") + "/"
RESULT_PATH = Path(os.environ.get("PHASE2B_RESULT", "platform/phase2b-v3-browser-result.json"))
SCREENSHOT_DIR = Path(os.environ.get("PHASE2B_SCREENSHOTS", "platform/phase2b-v3-screenshots"))
SCREENSHOT_DIR.mkdir(parents=True, exist_ok=True)

results: dict[str, Any] = {"base_url": BASE_URL, "passed": False, "checks": [], "failures": []}


def record(name: str, passed: bool, detail: str = "") -> None:
    results["checks"].append({"name": name, "passed": passed, "detail": detail})
    if not passed:
        results["failures"].append(f"{name}: {detail}")


async def wait_and_screenshot(page: Page, name: str) -> None:
    await page.wait_for_timeout(1200)
    await page.screenshot(path=str(SCREENSHOT_DIR / f"{name}.png"), full_page=True)


async def visit(page: Page, path: str) -> None:
    response = await page.goto(BASE_URL + path.lstrip("/"), wait_until="networkidle", timeout=60_000)
    record(f"HTTP {path}", bool(response and response.ok), f"status={response.status if response else 'none'}")


async def main() -> None:
    requested_urls: list[str] = []
    console_errors: list[str] = []

    async with async_playwright() as playwright:
        browser = await playwright.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1440, "height": 1000})
        page.on("response", lambda response: requested_urls.append(response.url))
        page.on("console", lambda message: console_errors.append(message.text) if message.type == "error" else None)

        await visit(page, "#/home")
        await page.wait_for_selector('[data-route="laboratorioKernel"]', timeout=20_000)
        await page.wait_for_selector('[data-route="herramientas"]', timeout=20_000)
        record("Menú Laboratorio", await page.locator('[data-route="laboratorioKernel"]').count() > 0)
        record("Menú Herramientas", await page.locator('[data-route="herramientas"]').count() > 0)
        await wait_and_screenshot(page, "01-home")

        await visit(page, "?kernelSection=formacion#/quienesSomos")
        await page.wait_for_selector('[data-kernel-platform-page="academic-background-v2"]', timeout=25_000)
        academic_buttons = await page.locator('[data-kernel-academic-v2]').count()
        academic_images = await page.locator('[data-kernel-platform-page="academic-background-v2"] img').evaluate_all(
            "elements => elements.filter(image => image.complete && image.naturalWidth > 0).length"
        )
        record("Formación académica renderizada", True)
        record("Nueve perfiles en Formación", academic_buttons == 9, f"perfiles={academic_buttons}")
        record("Fotografías de Formación cargadas", academic_images >= 9, f"imágenes={academic_images}")
        await wait_and_screenshot(page, "02-formacion")

        await visit(page, "#/equipment")
        await page.wait_for_selector('[data-kernel-platform-page="team-nine-v2"]', timeout=25_000)
        team_cards = await page.locator('.kernel-team-v2__card').count()
        team_images = await page.locator('.kernel-team-v2__card img').evaluate_all(
            "elements => elements.filter(image => image.complete && image.naturalWidth > 0).length"
        )
        record("Equipo integrado", True)
        record("Nueve tarjetas de Equipo", team_cards == 9, f"tarjetas={team_cards}")
        record("Fotografías de Equipo cargadas", team_images >= 9, f"imágenes={team_images}")
        await wait_and_screenshot(page, "03-equipo")

        await visit(page, "?investigador=miguel-leonardo#/equipment")
        await page.wait_for_selector('[data-kernel-team-v2-detail="miguel-leonardo"]', timeout=25_000)
        miguel_image_ok = await page.locator('[data-kernel-team-v2-detail="miguel-leonardo"] img').evaluate(
            "image => image.complete && image.naturalWidth > 0"
        )
        record("Perfil científico de Miguel", True)
        record("Fotografía actualizada de Miguel", bool(miguel_image_ok))
        await wait_and_screenshot(page, "04-miguel")

        requested_urls.clear()
        await visit(page, "#/publicaciones")
        await page.wait_for_timeout(3000)
        publications_text = await page.locator("body").inner_text()
        requested_publications = any("core/data/publications.v2.json" in url for url in requested_urls)
        record("Publicaciones 2.0 solicitadas", requested_publications, "No se observó la solicitud del catálogo v2" if not requested_publications else "")
        record("Resumen de 162 publicaciones", "162" in publications_text, "No aparece el total 162")
        await wait_and_screenshot(page, "05-publicaciones")

        requested_urls.clear()
        await visit(page, "#/proyectos")
        await page.wait_for_timeout(3000)
        projects_text = await page.locator("body").inner_text()
        requested_projects = any("core/data/projects.v2.json" in url for url in requested_urls)
        record("Proyectos 2.0 solicitados", requested_projects, "No se observó la solicitud del catálogo v2" if not requested_projects else "")
        record("Diez proyectos destacados", "10" in projects_text, "No aparece el total 10")
        record("Cuarenta y ocho participaciones adicionales", "48" in projects_text, "No aparece el total 48")
        await wait_and_screenshot(page, "06-proyectos")

        await visit(page, "#/herramientas")
        await page.wait_for_timeout(3000)
        tools_text = await page.locator("body").inner_text()
        record("ITLA · Xmera preservado", "Xmera" in tools_text, "No se encontró Xmera")
        record("UNAPEC · Banner preservado", "Banner" in tools_text, "No se encontró Banner")
        await wait_and_screenshot(page, "07-herramientas")

        await visit(page, "#/laboratorioKernel")
        await page.wait_for_timeout(3500)
        laboratory_text = (await page.locator("body").inner_text()).lower()
        laboratory_ok = len(laboratory_text.strip()) > 150 and any(
            token in laboratory_text for token in ("laboratorio", "iniciar sesión", "acceso", "asistente", "login")
        )
        record("Laboratorio Inteligente accesible", laboratory_ok, f"caracteres={len(laboratory_text)}")
        await wait_and_screenshot(page, "08-laboratorio")

        relevant_console_errors = [
            message for message in console_errors
            if "favicon" not in message.lower() and "third-party" not in message.lower()
        ]
        record("Sin errores críticos de consola", not relevant_console_errors, " | ".join(relevant_console_errors[:5]))
        await browser.close()

    results["passed"] = not results["failures"]
    RESULT_PATH.parent.mkdir(parents=True, exist_ok=True)
    RESULT_PATH.write_text(json.dumps(results, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    if not results["passed"]:
        raise SystemExit(1)


if __name__ == "__main__":
    asyncio.run(main())
