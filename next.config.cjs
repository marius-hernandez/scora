const { webpack } = require('next/dist/compiled/webpack/webpack')
import 'core-js/proposals/promise-with-resolvers';

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: false,
      },
    
}

module.exports = nextConfig
