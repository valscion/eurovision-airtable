/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
    dirs: ["pages", "app", "components", "lib"],
  },
};

module.exports = nextConfig;
