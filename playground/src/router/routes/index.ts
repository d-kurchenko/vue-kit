import { defineVueKitRouteEntities } from 'vue-kit';
import { homeRouteEntity } from './entries/home';
import { aboutRouteEntity } from './entries/about';

export const routes = defineVueKitRouteEntities([
  homeRouteEntity,
  aboutRouteEntity,
]);
