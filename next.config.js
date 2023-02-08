/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/base')],
    prependData: '@import "resources.scss";',
  },
};

module.exports = nextConfig;
