const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const webpack = require('webpack');

const paths = [
  {
    path: '/',
    lastmod: new Date().toISOString().split('T').shift(),
  },
];

const isDev = process.env.NODE_ENV !== 'production';

/** @type {import('webpack').Configuration}*/
module.exports = ({ project, port }) => ({
  mode: isDev ? 'development' : 'production',
  entry: `./src/${project}/index.tsx`,
  output: {
    path: path.resolve(__dirname, `dist/${project}`),
    filename: 'bundle.[contenthash].js',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, ''),
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  devServer: {
    static: 'dist',
    port: port || 8000,
    allowedHosts: 'all',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./src/${project}/index.html`,
      publicPath: './',
      minify: isDev
        ? false
        : {
            collapseWhitespace: true,
            keepClosingSlash: true,
            removeComments: true,
            removeRedundantAttributes: false,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
          },
    }),
    new MiniCssExtractPlugin({ filename: 'style.[contenthash].css' }),
    new CopyPlugin({
      patterns: [
        { from: './src/robots.txt', to: './' },
        { from: './src/assets', to: './assets/' },
      ],
    }),
    new SitemapPlugin({ base: `https://${project}.hu/`, paths }),
    new CssMinimizerPlugin(),
    new webpack.ProgressPlugin(),
  ],
});
