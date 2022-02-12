const R = require('ramda');

const basePath = process.env.NODE_ENV === 'production' ? '/blogs' : '';

module.exports = {
  reactStrictMode: true,
  assetPrefix: `${basePath}/`,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      return R.assocPath(['resolve', 'fallback', 'fs'], false)(config);
    }

    return config;
  },
};
