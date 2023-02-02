/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.glb/,
      type: 'asset/resource',
    })

    return config
  },
}