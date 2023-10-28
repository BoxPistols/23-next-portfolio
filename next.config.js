/** @type {import('next').NextConfig} */
const nextConfig = {
  // raw-loaderの読み込み設定
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
}
