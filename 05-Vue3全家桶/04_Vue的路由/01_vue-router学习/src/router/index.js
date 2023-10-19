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
            component: () => import(/* webpackChunkName: 'Home.vue'*/'@/components/Home.vue'),
            meta: { // 自定义属性
            
            }
        },
        {
            path: '/about',
            name: 'About',
            component: () => import(/* webpackChunkName: 'About.vue'*/'@/components/About.vue'),
            meta: { // 自定义属性
            
            }
        },
        {
            path: '/user/:id', // 动态路由：以冒号开始
            name: 'User',
            component: () => import(/* webpackChunkName: 'User.vue'*/'@/components/User.vue'),
            meta: { // 自定义属性
            
            }
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import(/* webpackChunkName: 'NotFound.vue'*/'@/components/NotFound.vue')
        }
    ]
})

// 暴露路由器
export default router