/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const repoName = "LandingPage_Psicologia_Pedro"; // nome exato do seu repositório

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  // Remova swcMinify e experimental.appDir!
  reactStrictMode: true,
};

module.exports = nextConfig;