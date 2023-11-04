import {defineConfig} from 'vite'
import {fileURLToPath, URL} from 'node:url'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {VantResolver} from '@vant/auto-import-resolver'
import postCssPxtoviewPort8Plugin from 'postcss-px-to-viewport-8-plugin'

export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [VantResolver()],
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://www.codercba.com:1888/api/',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            }
        }
    },
    css: {
        postcss: {
            plugins: [
                postCssPxtoviewPort8Plugin({
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
    }
})
