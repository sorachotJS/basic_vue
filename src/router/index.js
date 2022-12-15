import { createRouter, createWebHistory } from 'vue-router'

// Import Frontend Layouts
import FrontendLayout from '@/layouts/Frontend.vue';

// Import Frontend Pages
import Home from '@/views/frontend/Home.vue'
import About from '@/views/frontend/About.vue'
import Portfolio from '@/views/frontend/Portfolio.vue'
import Service from '@/views/frontend/Service.vue'
import Contact from '@/views/frontend/Contact.vue'
import Register from '@/views/frontend/Register.vue'
import Login from '@/views/frontend/Login.vue'
import ForgotPassword from '@/views/frontend/ForgotPassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   // Frontend Router
   {
    // เรียก Frontend Layouts
    path: '/',
    name: 'Frontend',
    component: FrontendLayout,
    // เรียกลูกๆ มาใส่
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'about',
        name: 'About',
        component: About,
      },
      {
        path: 'portfolio',
        name: 'Portfolio',
        component: Portfolio
      },
      {
        path: 'service',
        name: 'Service',
        component: Service
      },
      {
        path: 'contact',
        name: 'Contact',
        component: Contact
      }, 
      {
        path: 'register',
        name: 'Register',
        component: Register
      },
      {
        path: 'login',
        name: 'Portfolio',
        component: Portfolio
      },
    ]
   }
  ]
})

export default router
