import {createRouter, createWebHashHistory} from "vue-router";

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
            component: () => import('@/views/Home.vue'),
            meta: { /*自定义属性*/},
            children: []
        },
    
    ]
})

export default router