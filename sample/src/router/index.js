import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import AboutUs from '../components/AboutUs.vue'
import Form1 from '../components/Form1.vue'
import Form2 from '../components/Form2.vue'
import Form3 from '../components/Form3.vue'


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
  },
  {
    path: '/form1',
    component: Form1
  },
  {
    path: '/form2',
    component: Form2
  },
  {
    path: '/form3',
    component: Form3
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
