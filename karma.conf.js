// Karma configuration
// Generated on Thu Mar 08 2018 08:55:11 GMT-0800 (PST)
var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    mode: 'development',
    frameworks: ['jasmine'],
    files: [
      'src/*.spec.tsx'
    ],
    preprocessors: {
      'src/*.spec.tsx': ['webpack'],
    },
    webpack: {
      stats: "verbose",
      mode: "development",
      devtool: "cheap-module-eval-source-map",
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
}
