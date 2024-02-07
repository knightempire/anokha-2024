const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.glsl$/,
      use: "raw-loader",
    });

    return config;
  },

  images: {
    domains: ["anokha.amrita.edu", "i.imgur.com", 'imgur.com'],
  },

  env: {
    name: "sajith",
    email: "isajithrajan@gmail.com",
    phone: "6379132006",
  },
});
