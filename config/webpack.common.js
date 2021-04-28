const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PrettierPlugin = require('prettier-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const paths = require('./paths')

module.exports = {
  // Where webpack looks to start building the bundle
  //   [paths.src + '/js/main.js'],
  entry: {
    index: [paths.src + '/js/home.js'],
    examples: [paths.src + '/js/examples.js'],
    resources: [paths.src + '/js/resources.js'],
  },

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'MW5 Boilerplate - Home',
      favicon: paths.src + '/img/favicon.png',
      template: paths.src + '/views/templates/tpl-home.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html', // output file
    }),
    new HtmlWebpackPlugin({
      title: 'MW5 Boilerplate - Examples',
      favicon: paths.src + '/img/favicon.png',
      template: paths.src + '/views/templates/tpl-examples.html',
      inject: true,
      chunks: ['examples'],
      filename: 'examples.html', // output file
    }),
    new HtmlWebpackPlugin({
      title: 'MW5 Boilerplate - Resources',
      favicon: paths.src + '/img/favicon.png',
      template: paths.src + '/views/templates/tpl-resources.html',
      inject: true,
      chunks: ['resources'],
      filename: 'resources.html', // output file
    }),

    // ESLint configuration
    new ESLintPlugin({
      files: ['.', 'src', 'config'],
      formatter: 'table',
    }),

    // Prettier configuration
    new PrettierPlugin(),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.js$/, use: ['babel-loader'] },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg)$/, type: 'asset/inline' },
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json', '.scss', '.html'],
    alias: {
      '@': paths.src,
    },
  },
}
