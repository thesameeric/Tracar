import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('../views/dashboard'),
    children: [
      {
        path: '/dashboard/overview',
        name: 'overview',
        component: () => import('../views/dashboard/overview.vue'),
      },
      {
        path: '/dashboard/map',
        name: 'map',
        component: () => import('../views/dashboard/map.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
