const path = require('path');

module.exports = {
  reactScriptsVersion: 'react-scripts',
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname,'src/assets'),
      '@components': path.resolve(__dirname,'src/components'),
      '@constants': path.resolve(__dirname,'src/constants'),
      '@containers': path.resolve(__dirname,'src/containers'),
      '@hooks': path.resolve(__dirname,'src/hooks'),
      '@mocks': path.resolve(__dirname,'src/mocks'),
      '@routes': path.resolve(__dirname,'src/routes'),
      '@services': path.resolve(__dirname,'src/services'),
      '@styles': path.resolve(__dirname,'src/styles'),
      '@types': path.resolve(__dirname,'src/types'),
      '@utils': path.resolve(__dirname,'src/utils'),
      '@contexts': path.resolve(__dirname,'src/contexts'),
    },
    configure(webpackConfig) {
      // 配置扩展扩展名
      webpackConfig.resolve.extensions = [...webpackConfig.resolve.extensions, ...['.scss', '.css']];
      return webpackConfig;
    },
    devServer: {
      // 本地服务的端口号
      port: 3001,
      // 本地服务的响应头设置
      headers: {
        // 允许跨域
        'Access-Control-Allow-Origin': '*',
      },
    },
  }
}