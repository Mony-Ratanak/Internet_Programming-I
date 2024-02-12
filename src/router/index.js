import { createRouter, createWebHistory } from 'vue-router'
import HomeViewVue from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue,
    },
    {
      path: "/categories/:categoryID",
      component: () => import("../views/CategoryView.vue")
    },
    {
      path: "/products/:productID",
      component: () => import("../views/ProductView.vue")
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/Error404View.vue")
    },
    
  ]
})

export default router