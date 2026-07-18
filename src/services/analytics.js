const ANALYTICS_API_URL =
    "https://script.google.com/macros/s/AKfycbwYOIXuZWC1HiU2_iTsk8ytuHa1NDtFGbjQsO_37SmtbKWUsdS4RUQOOEU7GHz0E4wU7Q/exec";

/**
 * Consulta las estadísticas públicas del sitio del Grupo Kernel.
 *
 * @returns {Promise<{
 *   total: number,
 *   hoy: number,
 *   ultimos7Dias: number,
 *   actualizadoEn: string | null
 * }>}
 */
export async function obtenerEstadisticasAnalytics() {
    try {
        const response = await fetch(ANALYTICS_API_URL, {
            method: "GET",
            cache: "no-store"
        });

        if (!response.ok) {
            throw new Error(
                `La API de Analytics respondió con estado ${response.status}`
            );
        }

        const data = await response.json();

        if (!data.ok || !data.visitantes) {
            throw new Error("La respuesta de Analytics no tiene el formato esperado");
        }

        return {
            total: Number(data.visitantes.total) || 0,
            hoy: Number(data.visitantes.hoy) || 0,
            ultimos7Dias: Number(data.visitantes.ultimos7Dias) || 0,
            actualizadoEn: data.actualizadoEn || null
        };
    } catch (error) {
        console.error(
            "No fue posible obtener las estadísticas de Analytics:",
            error
        );

        return {
            total: 0,
            hoy: 0,
            ultimos7Dias: 0,
            actualizadoEn: null
        };
    }
}
