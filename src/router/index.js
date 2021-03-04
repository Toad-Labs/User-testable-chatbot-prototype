import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';

const Inbox = () => import('../views/Inbox.vue');
const NotFound = () => import('../views/NotFound.vue');
const ControllerPage = () => import('../views/Controller.vue');

export const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        component: HomePage,
      },
      {
        path: '/inbox',
        name: 'inbox',
        component: Inbox,
      },
      {
        path: '/controller',
        name: 'controller',
        component: ControllerPage,
      },
      {
        path: '/404',
        name: 'not-found',
        component: NotFound,
      },
      {
        path: '/:pathMatch(.*)*',
        redirect:
        {
          name: 'not-found'
        }
      }
    ],
  });

/*
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/blog',
      name: 'blog-posts',
      component: BlogLandingPage
    },
    {
      path: '/blog/:uid',
      name: 'blog-post',
      component: BlogPostPage
    },
    {
      path: '/page/:uid',
      name: 'page',
      component: ContentPage
    },
    {
      path: '/404',
      name: 'not-found',
      component: NotFound,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect:
      {
        name: 'not-found'
      }
    }
  ],
});
*/
