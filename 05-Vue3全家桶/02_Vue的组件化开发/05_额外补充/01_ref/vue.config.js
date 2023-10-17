const {defineConfig} = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        resolve: {
            /* 配置别名 */
            alias: {
                '@': path.resolve(__dirname + '/src')
            }
        }
    }
})
