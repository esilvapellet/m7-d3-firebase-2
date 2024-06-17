import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import('../views/SignUpView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/UserView.vue'),
    meta: {
      login: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  let authRequired = to.meta.login;
  let user = store.state.user;
  console.log(user);
  if (authRequired) {
    if (user) {
      next();
    } else {
      alert("Para acceder a este contenido debes estar autenticado.");
      next("/login")
    }
  } else {
    next();
  }
})

export default router
