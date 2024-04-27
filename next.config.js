/** @type {import('next').NextConfig} */

const { hostname } = require("os");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
    domains: ["brokeboyz-prod.mynt.la", "i.seadn.io"],
  },
  transpilePackages: ["geist"],
  experimental: {},
};

module.exports = nextConfig;
