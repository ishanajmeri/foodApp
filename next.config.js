/** @type {import('next').NextConfig} */

const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config) => {
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    return config;
  },
};

module.exports = nextConfig;
