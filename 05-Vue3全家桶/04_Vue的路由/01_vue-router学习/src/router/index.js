import {createRouter, createWebHashHistory} from "vue-router";

// 创建路由器
const router = createRouter({
    // 路由模式
    history: createWebHashHistory(),
    // 路由表
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import(/* webpackChunkName: 'Home.vue'*/'@/components/Home.vue')
        },
        {
            path: '/about',
            name: 'About',
            component: () => import(/* webpackChunkName: 'About.vue'*/'@/components/About.vue')
        }
    ]
})

// 暴露路由器
export default router