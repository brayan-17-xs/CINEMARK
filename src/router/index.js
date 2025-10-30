import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarteleraView from '../views/CarteleraView.vue'
import TeatroView from '../views/TeatroView.vue'
import ConfiteriaView from '../views/ConfiteriaView.vue'
import PromoView from '../views/PromoView.vue'
import CineclubView from '../views/CineclubView.vue'
import RegistroView from '../views/RegistroView.vue'
import TiqueteriaView from '../views/TiqueteriaView.vue'
import ConcursosView from '../views/ConcursosView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cartelera',
    name: 'cartelera',
    component: CarteleraView
  },
  {
    path: '/teatros',
    name: 'teatros',
    component: TeatroView
  },
  {
    path: '/confiteria',
    name: 'confiteria',
    component: ConfiteriaView
  },
  {
    path: '/promociones',
    name: 'promociones',
    component: PromoView
  },
  {
    path: '/cineclub',
    name: 'cineclub',
    component: CineclubView
  },
  {
    path: '/registro',
    name: 'registro',
    component: RegistroView
  },
  {
    path: '/tiqueteria',
    name: 'tiqueteria',
    component: TiqueteriaView
  },
  {
    path: '/concursos',
    name: 'concursos',
    component: ConcursosView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
