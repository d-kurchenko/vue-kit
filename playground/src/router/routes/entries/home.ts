import { defineVueKitRouteEntity } from 'vue-kit';

export const homeRouteEntity = defineVueKitRouteEntity({
  path: '/',
  name: 'home',
  component: () => import('src/views/HomeView.vue'),
});
