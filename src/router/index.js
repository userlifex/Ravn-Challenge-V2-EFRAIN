import { createRouter, createWebHistory } from 'vue-router'
import CharacterView from '@/views/character/CharacterView.vue'
import PersonCell from '@/components/common/PersonCell.vue'
const routes = [
  {
    path: '/',
    name: 'PersonCell',
    component: PersonCell,
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router