import {defineConfig} from 'vite'
import {fileURLToPath, URL} from 'node:url'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import {VantResolver} from '@vant/auto-import-resolver';

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
    }
})
