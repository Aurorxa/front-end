import { createApp } from 'vue'
import App from '@/App.vue'

const app = createApp(App)
app.directive('focus', {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created: (el) => el.focus(),
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted: (el) => el.focus()
})

app.mount('#app')
