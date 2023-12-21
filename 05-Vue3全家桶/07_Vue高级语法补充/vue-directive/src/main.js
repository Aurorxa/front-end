import {createApp} from 'vue'
import App from '@/App.vue'

const app = createApp(App)

// 使 v-focus 在所有组件中都可用
// app.directive('focus', {
//     mounted: (el) => {
//         el.focus()
//     }
// })

app.mount('#app')
