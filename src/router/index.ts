import { createRouter, createWebHistory } from 'vue-router'
import ResultsView from '../views/ResultsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/results',
      name: 'results',
      component: ResultsView
    }
  ]
})

export default router
