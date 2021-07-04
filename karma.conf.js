// Karma configuration
// Generated on Thu Mar 08 2018 08:55:11 GMT-0800 (PST)
var webpackConfig = require("./webpack.config.js");

module.exports = function (config) {
  config.set({
    basePath: "",
    mode: "development",
    plugins: [
      require("karma-jasmine"),
      require("karma-webpack"),
      require("karma-chrome-launcher"),
      require("karma-jsdom-launcher"),
      require("karma-spec-reporter"),
    ],
    frameworks: ["jasmine"],
    files: ["src/*.spec.tsx"],
    preprocessors: {
      "src/*.spec.tsx": ["webpack"],
    },
    webpack: {
      mode: "development",
      devtool: "source-map",
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
    },
    reporters: ["spec"],
    port: 9876,
    colors: true,
    // logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ["Chrome", "jsdom"],
    singleRun: true,
    concurrency: Infinity,
  });
};
