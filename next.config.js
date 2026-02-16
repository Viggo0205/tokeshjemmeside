/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/tokeshjemmeside',
  assetPrefix: '/tokeshjemmeside',
}

module.exports = nextConfig
