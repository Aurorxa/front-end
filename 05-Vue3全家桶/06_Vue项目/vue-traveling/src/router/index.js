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
            component: () => import('@/views/Home/index.vue'),
            meta: { /*自定义属性*/},
            children: []
        },
        {
            path: '/favor',
            name: 'Favor',
            component: () => import('@/views/Favor/index.vue'),
            meta: { /*自定义属性*/},
            children: []
        },
        {
            path: '/message',
            name: 'Message',
            component: () => import('@/views/Message/index.vue'),
            meta: { /*自定义属性*/},
            children: []
        },
        {
            path: '/order',
            name: 'Order',
            component: () => import('@/views/Order/index.vue'),
            meta: { /*自定义属性*/},
            children: []
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('@/components/NotFound/index.vue'),
            meta: { /*自定义属性*/},
            children: []
        }
    
    ]
})

export default router