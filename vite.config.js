import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

function copiarAvisosLegales() {
    return {
        name: "copiar-avisos-legales",
        apply: "build",
        writeBundle(opciones) {
            const directorioSalida = resolve(
                process.cwd(),
                typeof opciones.dir === "string" ? opciones.dir : "dist"
            );

            for (const archivo of ["LICENSE", "THIRD_PARTY_NOTICES.md"]) {
                copyFileSync(
                    resolve(process.cwd(), archivo),
                    resolve(directorioSalida, archivo)
                );
            }
        }
    };
}

export default defineConfig({
    plugins: [tailwindcss(), copiarAvisosLegales()],
    base: "./",
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes("@firebase") || id.includes("/firebase/")) {
                        return "firebase";
                    }

                    if (id.includes("@fortawesome")) {
                        return "fontawesome";
                    }

                    if (id.includes("/jstat/")) {
                        return "jstat";
                    }

                    return undefined;
                }
            }
        }
    }
});
