const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.glsl$/,
            use: 'raw-loader',
        });

        return config;
    },

    env: {
        name: "sajith",
        email: "isajithrajan@gmail.com",
        phone: "6379132006",
    }
});