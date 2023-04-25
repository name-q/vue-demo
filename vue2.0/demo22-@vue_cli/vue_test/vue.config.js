const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // proxy方式1 不推荐- filename优先级大于get
  // devServer: {
  //   proxy: "http://localhost:5000"
  // }

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/api': '' }
      }
    }
  }
});
