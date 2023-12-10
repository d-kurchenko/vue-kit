import type { RouteRecordRaw } from 'vue-router';
import { VueKitRouteEntity } from '../types';

export const defineVueKitRouteEntity = (routeRecordRaw: VueKitRouteEntity) => routeRecordRaw;

export const defineVueKitRouteEntities = (
  routes: VueKitRouteEntity[],
) => Object.values(routes).reduce<RouteRecordRaw[]>(
  (acc, item) => {
    if (Array.isArray(item)) {
      return [...acc, ...item];
    }
    return [...acc, item];
  },
  [],
);
