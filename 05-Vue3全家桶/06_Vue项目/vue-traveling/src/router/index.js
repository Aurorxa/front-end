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
            path: '/home/',
            name: 'Home',
            component: () => import('@/views/home/index.vue'),
            meta: { /*自定义属性*/},
            children: []
        },
        {
            path: '/favor',
            name: 'Favor',
            component: () => import('@/views/favor/index.vue'),
            meta: { /*自定义属性*/},
            children: []
        },
        {
            path: '/message',
            name: 'Message',
            component: () => import('@/views/message/index.vue'),
            meta: { /*自定义属性*/},
            children: []
        },
        {
            path: '/order',
            name: 'Order',
            component: () => import('@/views/order/index.vue'),
            meta: { /*自定义属性*/},
            children: []
        },
        {
            path: '/city',
            name: 'City',
            component: () => import('@/views/city/index.vue'),
            meta: { /*自定义属性*/
                hideTabBar: true // 隐藏 tab-bar
            },
            children: []
        },
        {
            path: '/search',
            name: 'Search',
            component: () => import('@/views/search/index.vue'),
            meta: { /*自定义属性*/
                hideTabBar: true // 隐藏 tab-bar
            },
            children: []
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('@/components/not-found/index.vue'),
            meta: { /*自定义属性*/},
            children: []
        }
    
    ]
})

export default router