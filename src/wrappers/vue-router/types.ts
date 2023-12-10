import { NavigationGuardWithThis, RouteRecordRaw, Router as VueRouter } from 'vue-router';

export type VueKitMiddleware = NavigationGuardWithThis<undefined>;

export type VueKitRouteEntity = RouteRecordRaw | RouteRecordRaw[];

export interface VueKitRouter {
  vueRouter: VueRouter;
  installMiddlewares: (middlewares: VueKitMiddleware[]) => void;
}
