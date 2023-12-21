import {createApp} from 'vue'
import App from '@/App.vue'
import router from '@/router'
import {createPinia} from "pinia"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import 'normalize.css'
import '@/assets/css/index.css'
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import 'vant/es/notify/style'
import 'vant/es/image-preview/style'
import BaiduMap from "vue-baidu-map-3x"
import 'default-passive-events'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: 'ilHPdTfTc6wEkoUTifBxfaZi9V6VYmwe',
    // v:'2.0',  // 默认使用3.0
    type: 'BMapGL' // ||API 默认API  (使用此模式 BMap=BMapGL)
});
app.mount('#app')
