const path = require('path');

module.exports = {
  "stories": ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-designs",
    "@whitespace/storybook-addon-html",
  ],
  core: {
    builder: "webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.resolve.alias = {
      "@assets": path.resolve(__dirname, "../", "src/assets"),
      "@components": path.resolve(__dirname, "../", "src/components"),
      "@context": path.resolve(__dirname, "../", "src/context"),
      "@icons": path.resolve(__dirname, "../", "src/icons"),
      "@partials": path.resolve(__dirname, "../", "src/partials"),
      "@shared": path.resolve(__dirname, "../", "src/shared"),
    };

    // Return the altered config
    return config;
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
};
