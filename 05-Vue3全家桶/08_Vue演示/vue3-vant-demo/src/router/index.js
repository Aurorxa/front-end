import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      redirect: '/home',
      component: () => import('@/views/Layout.vue'),
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('@/views/Home.vue')
        },
        {
          path: 'star',
          name: 'Star',
          component: () => import('@/views/Star.vue')
        },
        {
          path: 'like',
          name: 'Like',
          component: () => import('@/views/Like.vue')
        },
        {
          path: 'user',
          name: 'User',
          component: () => import('@/views/User.vue')
        },
        {
          path: 'notFound',
          name: 'NotFound',
          component: () => import('@/views/NotFound.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/notFound'
    }
  ]
})

export default router
