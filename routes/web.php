<?php

use Illuminate\Support\Facades\Route;

// Route::statamic("example", "example-view", [
//    "title" => "Example"
// ]);

Route::statamic("manifest.json", "layouts/manifest", [
  "layout" => "layouts/manifest",
  "content_type" => "application/manifest+json"
]);

Route::statamic("robots.txt", "layouts/robots", [
  "layout" => "layouts/robots",
  "content_type" => "text/plain"
]);

Route::statamic("sitemap.xml", "layouts/sitemap", [
  "layout" => "layouts/sitemap",
  "content_type" => "application/xml"
]);
