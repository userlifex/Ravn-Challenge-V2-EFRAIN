import { createRouter, createWebHistory } from 'vue-router'
// import CharacterView from '@/views/character/CharacterView.vue'
import DataLayout from '@/components/layout/DataLayout.vue'
const routes = [
  {
    path: '/',
    name: 'DataLayout',
    component: DataLayout,
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router