/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export", // 开启纯静态导出
  trailingSlash: true, // 路径统一带/，避免路由异常
  distDir: "output",
  basePath: "/Pblog", // 替换成你的仓库名
  assetPrefix: "/Pblog/", // 注意末尾的斜杠
};

module.exports = nextConfig;
