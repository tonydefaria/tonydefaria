import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? process.env.ASSET_CDN_URL + "/" : "/",
  plugins: [
    laravel({
      input: ["resources/css/site.scss", "resources/js/site.js"],
      refresh: true
    })
  ]
}));
