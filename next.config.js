require('dotenv').config();
//const withCSS = require('@zeit/next-css');

const isProduction = process.env.NODE_ENV === 'production';
const prefix = isProduction ? '/bumperballs' : '';

const envVariables = {
  AIRTABLE_APP: process.env.AIRTABLE_APP,
  AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
  ASSET_PREFIX: prefix,
};

module.exports = {
  env: envVariables,
  publicRuntimeConfig: {
    SENTRY: process.env.SENTRY,
  },
  assetPrefix: isProduction ? '/bumperballs' : '',
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    };
  },
};
