import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Form from '../components/form.vue'
// import LoginForm from '../components/loginForm.vue'

const routes = [
  {
    path: '/',
    // name: 'home',
    // component: HomeView
    name: 'form',
    component: Form
  },
  // {
  //   path: '/login',   
  //   name: 'loginForm',
  //   component: LoginForm
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
