const path = require('path');

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: 'development',
  devServer: {
    port: 8080,
    static: {
      directory: "./",
    },
  },
  experiments: {
    asyncWebAssembly: true,
  },
};
