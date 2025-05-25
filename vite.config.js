import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
  base: "https://staging-tonydefaria.b-cdn.net/build/",
  build: {
    outDir: "public/build",
    emptyOutDir: true
  },
  plugins: [
    laravel({
      input: ["resources/css/site.scss", "resources/js/site.js"],
      refresh: true
    })
  ]
});
