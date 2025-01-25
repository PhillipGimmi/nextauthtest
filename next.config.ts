/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Note: middleware works regardless of this setting, but it's good to be explicit
  experimental: {
    instrumentationHook: true // Enables advanced middleware features
  }
}

module.exports = nextConfig