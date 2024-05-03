const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://syt.atguigu.cn",
        changeOrigin: true,
      },
    },
  },
};
