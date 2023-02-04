/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withVideos({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.glb/,
      type: 'asset/resource',
    })


    return config
  },
})