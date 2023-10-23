// Composables
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/auth',
    component: () => import('@/layouts/blank'),
    children: [
      {
        path: '',
        name: 'Login',
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/Auth/Login.vue'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/Auth/Register.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home'),
      },
      {
        path: 'demo',
        name: 'Demo',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Demo'),
        meta: {
          title: '测试页面',
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/Error/404.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
