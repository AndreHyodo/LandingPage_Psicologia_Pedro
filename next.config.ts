/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Add if using custom directories
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig