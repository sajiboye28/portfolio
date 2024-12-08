const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');

module.exports = function override(config, env) {
  // Enhanced module resolution
  config.resolve = {
    ...config.resolve,
    fallback: {
      ...config.resolve.fallback,
      "stream": require.resolve("stream-browserify"),
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "assert": require.resolve("assert/"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "url": require.resolve("url/")
    },
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@styles': path.resolve(__dirname, 'src/styles')
    }
  };

  // Enhanced dev server configuration
  config.devServer = {
    ...(config.devServer || {}),
    headers: {
      'Content-Security-Policy': "default-src * 'unsafe-inline' 'unsafe-eval'; " +
                                  "script-src * 'unsafe-inline' 'unsafe-eval'; " +
                                  "connect-src * ws: http: https:; " +
                                  "img-src * data: blob:; " +
                                  "media-src *; " +
                                  "font-src *; " +
                                  "style-src * 'unsafe-inline';"
    },
    // Improved hot reloading
    hot: true,
    // Fallback to client-side routing
    historyApiFallback: true,
    // Enhanced error handling
    client: {
      overlay: {
        errors: true,
        warnings: false,
        runtimeErrors: true
      },
      webSocketTransport: 'ws'
    },
    webSocketServer: 'ws'
  };

  // Enhanced plugins
  config.plugins = [
    ...config.plugins,
    // Hot Module Replacement
    new webpack.HotModuleReplacementPlugin(),
    // React Refresh
    new ReactRefreshWebpackPlugin({
      overlay: {
        sockPort: 3000
      }
    }),
    // Enhanced HTML generation
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      // Improved script and resource handling
      scriptLoading: 'defer',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      }
    }),
    // Process environment variables
    new webpack.DefinePlugin({
      'process.env.REACT_DISABLE_NEW_JSX_TRANSFORM': JSON.stringify('true')
    }),
    // Provide plugin for polyfills
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  ];

  // Source map configuration for better debugging
  config.devtool = env === 'production' 
    ? 'source-map' 
    : 'cheap-module-source-map';

  // Performance hints configuration
  config.performance = {
    hints: env === 'production' ? 'warning' : false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  };

  // Module rules for handling CSS and other assets
  config.module.rules.push({
    test: /\.css$/,
    use: ['style-loader', 'css-loader', 'postcss-loader']
  });

  return config;
};
