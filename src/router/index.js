// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import FormFlow1 from '../components/forms/FormFlow1.vue'
import FormFlow2 from '../components/forms/FormFlow2.vue'
import FormFlow3 from '../components/forms/FormFlow3.vue'
import EntryPoint from '../components/EntryPoint.vue'
import FormCompleted from '../components/FormCompleted.vue'

const routes = [
  {
    path: '/',
    name: 'EntryPoint',
    component: EntryPoint
  },
  {
    path: '/form1',
    name: 'FormFlow1',
    component: FormFlow1
  },
  {
    path: '/form2',
    name: 'FormFlow2',
    component: FormFlow2
  },
  {
    path: '/form3',
    name: 'FormFlow3',
    component: FormFlow3
  },
  {
    path: '/completed',
    name: 'FormCompleted',
    component: FormCompleted
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router