import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [tailwindcss()],
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
