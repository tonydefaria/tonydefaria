/** @type {import("next").NextConfig} */

const nextConfig = {
  trailingSlash: true,
  webpack5: true,
  images: {
    domains: ["hankyo-production.fra1.cdn.digitaloceanspaces.com"],
  },
  experimental: {
    images: {
      allowFutureImage: true
    }
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "strict-transport-security",
            value: "max-age=31536000; includeSubDomains; preload",
          }
        ],
        source: "/:all*(svg|jpg|png|webp)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, must-revalidate",
          }
        ],
      }
    ]
  }
}

module.exports = nextConfig
