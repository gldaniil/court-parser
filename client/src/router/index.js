import { createRouter, createWebHistory } from 'vue-router'
import SolutionsList from '../components/SolutionsList.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/court/:id',
          name: 'court',
          component: SolutionsList
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/editing',
      name: 'editing',
      component: () => import('../views/EditingView.vue')
    }
  ]
})

export default router
