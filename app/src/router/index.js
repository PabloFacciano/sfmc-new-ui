// Example router:
// https://github.com/bencodezen/vue-enterprise-boilerplate/blob/main/src/router/routes.js

import { createRouter, createWebHashHistory } from 'vue-router'
import AppView_Home from '@/views/Home.vue'
import AppView_About from '@/views/About.vue'
import AppView__404 from '@/views/_404.vue'

const routes = [
  {
    path: '/',
    name: 'App',
    component: AppView_Home,
  },
  {
    path: '/about',
    name: 'About',
    component: AppView_About,
  },
  {
    path: '/404',
    name: '404',
    component: AppView__404,
    // Allows props to be passed to the 404 page through route
    // params, such as `resource` to define what wasn't found.
    props: true,
  },
  // Redirect any unmatched routes to the 404 page.
  {
    path: '/:pathMatch(.*)*',
    redirect: '404',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
