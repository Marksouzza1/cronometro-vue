import { createRouter, createWebHistory } from 'vue-router'
import Cronometro from '../views/Cronometro.vue'

const routes = [
  {
    path: '/',
    name: 'Cronometro',
    component: Cronometro
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
