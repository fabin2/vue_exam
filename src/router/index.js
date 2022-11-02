import { createRouter, createWebHistory } from 'vue-router'

import Accueil from '../views/AccueilView.vue'
import Utilisateurs from '../views/UtilisateursView.vue'
import Ajouter from '../views/AjouterView.vue'
import Modifier from '../views/ModifierView.vue'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/Utilisateurs',
    name: 'Utilisateurs',
    component: Utilisateurs
  },
  {
    path: '/Ajouter',
    name: 'Ajouter',
    component: Ajouter
  },
  {
    path: '/Modifier/utilisateur :id',
    name: 'Modifier',
    component: Modifier,
    props: true
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
