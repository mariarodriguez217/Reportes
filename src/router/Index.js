import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import {authStore} from '../stores/auth'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home.vue')
    },
   
    {
    
      path: '/crearReportes',
      name: 'crearReportes',
      component: () => import('../views/CrearReportes.vue')
    },
   
 
    {
      path: '/solo-logeados',
      name: 'solologin',
      meta:{requireAuth:true},
      component: () => import('../views/SoloLogueados.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    }

  ]
})

router.beforeEach((to, from, next) => {
  const auth = authStore(); // Obtenemos el store de autenticación

  if (to.meta.requireAuth && !auth.isLogged) {
    // Si la ruta requiere autenticación y el usuario no está logeado, redirige al login
    next({ name: 'home' });
  } else {
    next(); // De lo contrario, permite la navegación
  }
});

export default router