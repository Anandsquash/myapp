import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import AboutUs from '../components/AboutUs.vue'

const routes = [
  {
    path: '/',
    component: HelloWorld
  },
  {
    path: '/aboutus',
    component: AboutUs
  },
  {
    path: '/helloworld',
    component: HelloWorld
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
