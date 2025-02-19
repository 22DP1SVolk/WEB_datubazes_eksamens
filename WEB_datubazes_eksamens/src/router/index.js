import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GalleryView from '@/views/GalleryView.vue'
import AboutView from '@/views/AboutView.vue'
import Lists from '@/views/Lists.vue'
import Login from '@/views/LoginView.vue'
import LoginView from '@/views/LoginView.vue'
import SignUpView from '@/views/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView,
    },
    {
      path: '/lists',
      name: 'lists',
      component: Lists,
    },
    {
      path: '/login',
      name: 'login',
      component:LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
  ],
})

export default router