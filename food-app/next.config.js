/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['antd-mobile'],
    output: "export",  // 让 Next.js 生成静态 HTML 文件
    images: {
      unoptimized: true,  // 解决 Amplify 不支持 Image Optimization 问题
    },}

  module.exports = nextConfig;
  
