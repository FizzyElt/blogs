const R = require('ramda');

module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      return R.assocPath(['resolve', 'fallback', 'fs'], false)(config);
    }

    return config;
  },
};
