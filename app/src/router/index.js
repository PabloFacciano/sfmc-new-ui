// Example router:
// https://github.com/bencodezen/vue-enterprise-boilerplate/blob/main/src/router/routes.js

import { createRouter, createWebHashHistory } from 'vue-router'
import AppView_Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppView_Home,
  },
  {
    path: '/audience',
    children: [
      {
        path: '/contacts',
        children: [
          {
            alias: '/list',
            path: '/',
            component: () => import('@/views/AudienceContacts.vue'),
          },
        ]
      },
      {
        path: '/',
        component: () => import('@/views/Audience.vue'),
      }
    ]
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: require('@/views/_404.vue').default,
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
  linkActiveClass: "bg-primary text-light",
  linkExactActiveClass: "bg-primary text-light",
  routes,
})

export default router;

