module.exports = {
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.glsl$/,
            use: 'raw-loader',
        });

        return config;
    },
};