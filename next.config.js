const { webpack } = require('next/dist/compiled/webpack/webpack')


/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { webpackBuildWorker: true },
    webpack:(config, {isServer})=>{
        config.plugins.push(
            new webpack.IgnorePlugin({
                resourceRegExp: /pdfjs-dist/
            })
        )
        return config
    }
    
}

module.exports = nextConfig
