require('dotenv').config();
const withCSS = require('@zeit/next-css');

const envVariables = {
  AIRTABLE_APP: process.env.AIRTABLE_APP,
  AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
};

module.exports = withCSS({
  env: envVariables,
  publicRuntimeConfig: {
    SENTRY: process.env.SENTRY,
  },
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    };
  },
});
