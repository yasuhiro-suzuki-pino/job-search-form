import { createRouter, createWebHistory } from 'vue-router'
import FormFlow from '../components/FormFlow.vue'
import FormCompleted from '../components/FormCompleted.vue'

const routes = [
  {
    path: '/',
    name: 'FormFlow',
    component: FormFlow
  },
  {
    path: '/completed',
    name: 'Completed',
    component: FormCompleted
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router