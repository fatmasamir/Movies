import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      external: ["vue", "vuex"],
      output: {
        paths: {
          vue: "https://cdn.jsdelivr.net/npm/vue@3.0.7/dist/vue.esm-browser.prod.js",
          vuex: "https://cdn.jsdelivr.net/npm/vuex@4.0.0/dist/vuex.esm-browser.prod.js",
        },
      },
    },
  },
  plugins: [vue()],
  server: {
    host: "localhost",
    port: 3000,
  },
});
