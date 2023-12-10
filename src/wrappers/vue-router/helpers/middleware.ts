import type { Router } from 'vue-router';
import { VueKitMiddleware } from '../types';

export const defineVueKitMiddleware = (middleware: VueKitMiddleware) => middleware;

export const defineVueKitMiddlewares = (middlewares: VueKitMiddleware[]) => middlewares;

export const installVueKitMiddlewares = (vueRouter: Router, middlewares: VueKitMiddleware[]) => {
  middlewares.forEach((middleware) => {
    vueRouter.beforeEach(middleware);
  });
};
