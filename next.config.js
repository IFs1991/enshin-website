/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    outputStandalone: true,
  },
  // Docker環境でのホスト設定
  webServer: {
    hostname: '0.0.0.0',
  },
}

module.exports = nextConfig