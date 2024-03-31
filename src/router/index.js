import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/enunciado',
      name: 'enunciado',
      component: () => import('../views/EnunciadoProva.vue')
    },
    {
      path: '/prova',
      name: 'prova',
      component: () => import('../views/Prova.vue')
    }
  ]
})

export default router
