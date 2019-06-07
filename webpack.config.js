const path = require('path');
// Creates a webpack-assets.json with a reference to the chunks
const AssetsPlugin = require('assets-webpack-plugin');
// Cleans up the output directory on each build
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// Minify
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    activity: './temboardui/plugins/activity/static/js/temboard.activity.js',
    notifications: './temboardui/static/js/temboard.notifications.js',
    'settings.group': './temboardui/static/js/temboard.settings.group.js',
    'settings.user': './temboardui/static/js/temboard.settings.user.js',
    'settings.instance': './temboardui/static/js/temboard.settings.instance.js',
  },
  output: {
    path: path.resolve(__dirname, 'temboardui/static/js/build'),
    publicPath: '/js/build',
    filename: '[name]-bundle-[chunkhash].js'
  },
  module: {
    rules: [
      // Disable AMD
      // https://gist.github.com/jrunestone/2fbe5d6d5e425b7c046168b6d6e74e95
      {
        test: /datatables\.net.*/,
        loader: 'imports-loader?define=>false'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new UglifyJsPlugin(),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new AssetsPlugin({
      prettyPrint: true
    })
  ]
};
