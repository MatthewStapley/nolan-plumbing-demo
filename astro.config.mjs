import { defineConfig } from "astro/config";

// Published at https://matthewstapley.github.io/nolan-plumbing-demo/
// SITE_URL / BASE_PATH can override these (e.g. BASE_PATH=/ for a custom domain).
export default defineConfig({
  site: process.env.SITE_URL || "https://matthewstapley.github.io",
  base: process.env.BASE_PATH || "/nolan-plumbing-demo",
  compressHTML: true,
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 4321,
  },
});
