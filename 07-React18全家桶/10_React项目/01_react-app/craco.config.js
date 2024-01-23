const path = require('path');
const CracoLessPlugin = require("craco-less")
const webpack = require('webpack')
const {CodeInspectorPlugin} = require("code-inspector-plugin")

module.exports = {
  reactScriptsVersion: 'react-scripts',
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@mocks': path.resolve(__dirname, 'src/mocks'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
    },
    configure(webpackConfig) {
      // 配置扩展名
      webpackConfig.resolve.extensions = [...webpackConfig.resolve.extensions, ...['.scss', '.css', '.less']];
      return webpackConfig
    },
    plugins: [
      CodeInspectorPlugin({
        bundler: 'webpack',
      }),
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#1DA57A",
              "@link-color": "#1DA57A",
              "@border-radius-base": "2px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  devServer: {
    // 本地服务的端口号
    port: 3001,
    // 本地服务的响应头设置
    headers: {
      // 允许跨域
      'Access-Control-Allow-Origin': '*',
    },
    proxy: { // 配置代理（只在本地开发有效，上线无效）
      '/api': {
        target: 'http://codercba.com:1888/airbnb/api/',
        pathRewrite: {
          "^/api": ''
        },
        changeOrigin: true,
      },
    }
  },
}