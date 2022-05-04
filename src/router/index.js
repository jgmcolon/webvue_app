import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../views/HomeView.vue')
    },

    {
      path: '/permission/Index',
      name: 'permission-index',
      component: import('../views/Permission/Index.vue')
    },

    {
      path: '/permission/Item/:id?',
      name: 'permission-item',
      component: import('../views/Permission/Item.vue')
    },

    {
      path: '/permission/Delete/:id',
      name: 'permission-delete',
      component: import('../views/Permission/Delete.vue')
    },

  ],
})

export default router
