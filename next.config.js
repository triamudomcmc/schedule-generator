/** @type {import('next').NextConfig} */
const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
  reactStrictMode: true,
  /** OUTDATED: unnecessary for next.js v13 (Jul 2025; TUCMC 68)
    future: {
    webpack5: true,
  },*/
  webpack: function (config, { dev, isServer }) {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    // copy files you're interested in
    if (!dev) {
      config.plugins.push(
        new CopyPlugin({
          patterns: [{ from: "_keep", to: "_keep" }],
        })
      )
    }

    return config
  },
}
