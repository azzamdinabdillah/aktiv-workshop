// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  build: {
    assetsPrefix: "/aktiv",
    format: "preserve",
  },
  base: "/aktiv",
  vite: {
    plugins: [tailwindcss()],
    define: {
      "import.meta.env.ICONS_FOLDER": JSON.stringify("/aktiv/assets/icons"),
    },
  },
});
