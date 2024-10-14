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

  output: "standalone",

  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost",
        "test.payu.in",
        "testtxncdn.payubiz.in",
        "secure.payu.in",
        "txncdn.payu.in",
        "anokha.amrita.edu",
      ],
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**gravatar.com",
        port: "",
        pathname: "/avatar/**",
      },
      {
        protocol: "https",
        hostname: "anokha.amrita.edu",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "imgur.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**wwd.com",
        port: "",
        pathname: "/**",
      }
    ],
  },
});
