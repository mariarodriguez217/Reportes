import { createRouter, createWebHistory } from 'vue-router';
import { authStore } from '../stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home', // Redirige al home por defecto
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home.vue'), // Asegúrate de que esta ruta sea correcta
    },
    {
      path: '/crearReportes',
      name: 'crearReportes',
      component: () => import('../views/CrearReportes.vue'),
    },
    {
      path: '/procesoTareas',
      name: 'procesoTareas',
      component: () => import('../views/ProcesoTareas.vue'),
    },
    {
      path: '/detallesTarea',
      name: 'detallesTarea',
      component: () => import('../views/DetallesTarea.vue'),
    },
    {
      path: '/todasTareas',
      name: 'todasTareas',
      component: () => import('../views/TodasTareas.vue'),
    },
    {
      path: '/nuevoReporte',
      name: 'nuevoReporte',
      component: () => import('../views/NuevoReporte.vue'),
    },
    {
      path: '/solo-logeados',
      name: 'solologin',
      meta: { requireAuth: true },
      component: () => import('../views/SoloLogueados.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue'),
    },
  ],
});

// Middleware para verificar la autenticación
router.beforeEach((to, from, next) => {
  const auth = authStore(); // Obtenemos el store de autenticación

  // Verificamos si la ruta requiere autenticación
  if (to.meta.requireAuth && !auth.isLogged) {
    next({ name: 'login' }); // Redirige al login si no está autenticado
  } else {
    next(); // Permite la navegación
  }
});

export default router;