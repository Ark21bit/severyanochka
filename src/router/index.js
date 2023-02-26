import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/Index.vue'
import Catalog from '../views/Catalog.vue'
import Category from '../views/Category.vue'
import Sitemap from '../views/Sitemap.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: index
    },   
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },   
    {
      path: '/category',
      name: 'category',
      component: Category
    },   
    {
      path: '/sitemap',
      name: 'sitemap',
      component: Sitemap
    },   
  ]
})

export default router
