// @ts-nocheck
import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/AuthLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('@/pages/Auth/LoginHomePage.vue')
        },
        {
          path: '/auth/login',
          name: 'LoginPage',
          component: () => import('@/pages/Auth/LoginPage.vue')
        }
      ]
    },
    {
      path: '/home',
      component: () => import('@/pages/HomePage.vue'),
      children: [
        {
          path: '',
          name: 'MainPage',
          component: () => import('@/pages/Dashboard/MainPage.vue')
        },
        {
          path: 'azolik',
          name: 'AzolikPage',
          component: () => import('@/pages/Dashboard/AzolikPage.vue')
        },
        {
          path: 'davo-ariza',
          name: 'DavoArizaPage',
          component: () => import('@/pages/Dashboard/DavoArizaPage.vue')
        },
        {
          path: 'kadr',
          name: 'Kadr',
          component: () => import('@/pages/Dashboard/KadrPage.vue')
        }
      ]
    }
  ]
})

export default router
