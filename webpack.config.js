const path = require('path');
const fs = require('fs');

// Needed to include files that aren't used anywhere in our code
const icons = fs
  .readdirSync('./src/assets/icons')
  .reduce((acc, v) => [...acc, `${__dirname}/src/assets/icons/${v}`], []);

const fonts = fs
  .readdirSync('./src/assets/fonts')
  .reduce((acc, v) => [...acc, `${__dirname}/src/assets/fonts/${v}`], []);

const entries = [
  `${__dirname}/src/assets/scripts/main.js`,
  `${__dirname}/src/assets/styles/main.scss`,
  ...icons,
  ...fonts,
];

module.exports = {
  entry: entries,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/[name].min.js',
    clean: true,
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './', 'src/assets'),
      '@components': path.resolve(__dirname, './', 'src/components'),
      '@context': path.resolve(__dirname, './', 'src/context'),
      '@icons': path.resolve(__dirname, './', 'src/icons'),
      '@partials': path.resolve(__dirname, './', 'src/partials'),
      '@shared': path.resolve(__dirname, './', 'src/shared'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'styles/[name].min.css' },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: 'icons/[name][ext]',
        },
      },
    ],
  },
  mode: 'production',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 5001,
    webSocketServer: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },
};
