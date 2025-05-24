import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
  plugins: [
    laravel({
      input: [
        // CSS
        "resources/css/site.scss",
        "resources/css/cp.scss",
        // JS
        "resources/js/site.js",
        "resources/js/cp.js"
      ],
      refresh: true
    })
  ]
});
