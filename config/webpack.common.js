const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env', '@babel/preset-react'] },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader', // translates CSS into CommonJS modules
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false, // disable the behavior
        },
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.*', '.js', '.jsx', '.ts', '.json'],
    mainFields: ['browser', 'jsnext:main', 'main'],
    alias: {
      settings: path.resolve(process.cwd(), 'src/settings/'),
      assets: path.resolve(process.cwd(), 'src/assets/'),
      constants: path.resolve(process.cwd(), 'src/constants/'),
      pages: path.resolve(process.cwd(), 'src/pages/'),
      components: path.resolve(process.cwd(), 'src/components/'),
      slices: path.resolve(process.cwd(), 'src/slices/'),
      sagas: path.resolve(process.cwd(), 'src/sagas/'),
      hooks: path.resolve(process.cwd(), 'src/hooks/'),
      hocs: path.resolve(process.cwd(), 'src/hocs/'),
      context: path.resolve(process.cwd(), 'src/context/'),
      services: path.resolve(process.cwd(), 'src/services/'),
      features: path.resolve(process.cwd(), 'src/features/'),
    },
    fallback: {
      domain: require.resolve('domain-browser'),
      process: require.resolve('process/browser'),
      zlib: require.resolve('browserify-zlib'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util'),
      buffer: require.resolve('buffer'),
      asset: require.resolve('assert'),
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'src/config.js', to: 'config.js' }],
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
  ],
};
