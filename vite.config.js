import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
  base: process.env.APP_ENV === "production" ? process.env.ASSET_CDN_URL + "/" : "/",
  plugins: [
    laravel({
      input: ["resources/css/site.scss", "resources/js/site.js"],
      refresh: true
    })
  ]
});
