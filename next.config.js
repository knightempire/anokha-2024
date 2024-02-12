const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withTM = require("next-transpile-modules")([
  "@mui/material",
  "@mui/system",
  "@mui/icons-material",
]);

module.exports = withBundleAnalyzer({
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      "@mui/styled-engine": "@mui/styled-engine-sc",
    };
    config.module.rules.push({
      test: /\.glsl$/,
      use: "raw-loader",
    });

    return config;
  },

  images: {
    domains: ["anokha.amrita.edu", "i.imgur.com", "imgur.com"],
  },

  env: {
    name: "sajith",
    email: "isajithrajan@gmail.com",
    phone: "6379132006",
  },
});
