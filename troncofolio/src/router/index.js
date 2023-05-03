import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MerchView from '../views/MerchView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component:AboutView,
  },
  {
    path: '/merch',
    name: 'merch',
    component:MerchView,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
