import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'  
import ContactView from '../views/ContactView.vue'
import Blog from '../views/Blog.vue'    
import Creators from '../views/Creators.vue'
import Hospitality from '../views/Hospitality.vue'





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView},
    {path: '/creators', name: 'creators', component: Creators},
    {path: '/hospitality', name: 'hospitality', component: Hospitality,},
    {path: '/about', name: 'about', component: AboutView},
    {path: '/blog', name: 'blog', component: Blog},
    {path: '/contact', name: 'contact', component:ContactView },

  ],
})

export default router