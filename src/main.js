import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'

import Dashboard from './Dashboard.vue'




const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  // Add other routes here
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})


const app = createApp(Dashboard)
app.use(router)
app.mount('#app')
