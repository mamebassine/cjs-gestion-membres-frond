import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import FonctionnalitesView from '../views/FonctionnalitesView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/fonctionnalites',
    name: 'Fonctionnalites',
    component: FonctionnalitesView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router