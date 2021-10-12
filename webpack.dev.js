const webPackConfig = require("./webpack.common");

module.exports = {
  ...webPackConfig,
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    compress: true,
    port: 5000,
  },
  mode: "development",
};
