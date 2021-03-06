require('dotenv').config();
const withPWA = require('next-pwa');

const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';
const prefix = isProduction ? '' : '';

const envVariables = {
  AIRTABLE_APP: process.env.AIRTABLE_APP,
  AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
  ASSET_PREFIX: prefix,
};

module.exports = withPWA({
  env: envVariables,
  publicRuntimeConfig: {
    SENTRY: process.env.SENTRY,
  },
  assetPrefix: prefix,
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    };
  },
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(prefix),
      })
    );

    return config;
  },
});
