import { defineVueKitRouteEntity } from 'vue-kit';

export const aboutRouteEntity = defineVueKitRouteEntity({
  path: '/about',
  name: 'about',
  component: () => import('src/views/AboutView.vue'),
  meta: {
    title: 'About',
    layout: 'empty',
  },
});
