import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/color',
      name: 'Color',
      component: () => import('../views/ColorView.vue'),
    },
    {
      path: '/fade',
      name: 'Fade',
      component: () => import('../views/FadeView.vue'),
    },
    {
      path: '/invitationList',
      name: 'Invitation List',
      component: () => import('../views/InvitationListView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
