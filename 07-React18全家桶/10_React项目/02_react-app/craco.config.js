const path = require('path');
const CracoLessPlugin = require("craco-less")
const {CodeInspectorPlugin} = require("code-inspector-plugin")
const postCssPxToViewPort8Plugin = require('postcss-px-to-viewport-8-plugin')
module.exports = {
  reactScriptsVersion: 'react-scripts',
  style: {
    postcss: {
      plugins: [
        postCssPxToViewPort8Plugin({
          unitToConvert: 'px', // 要转化的单位
          viewportWidth: file => {  // UI 设计稿的宽度
            let num = 375
            // van 是 375
            if (file.indexOf('van') > 0) {
              num = 375
            }
            return num
          },
          unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ['*'], // 指定转换的 css 属性的单位，* 代表全部 css 属性的单位都进行转换
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认 vw
          fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认 vw
          selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
          minPixelValue: 1, // 默认值 1，小于或等于 1px 则不进行转换
          mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认 false
          replace: true, // 是否转换后直接更换属性值
          // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
          exclude: [],
          landscape: false, // 是否处理横屏情况
          landscapeUnit: 'vw', // 横屏时使用的单位
          landscapeWidth: 1628, // 横屏时使用的视口宽度
        })
      ]
    }
  },
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
  babel: {
    plugins: [
      [
        "import",
        {
          "libraryName": "@nutui/nutui-react",
          "libraryDirectory": "dist/esm",
          "style": "css",
          "camel2DashComponentName": false
        },
        "nutui-react"
      ]
    ]
  },
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
        target: 'http://localhost:8889/',
        pathRewrite: {
          "^/api": ''
        },
        changeOrigin: true,
      },
    }
  },
}