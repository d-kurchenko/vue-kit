import {
  createRouter as vueCreateRouter,
  type RouterOptions as VueRouterOptions,
} from 'vue-router';
import { VueKitRouter } from './types';
import { installVueKitMiddlewares } from './helpers';

export const createVueKitRouter = (vueRouterOptions: VueRouterOptions): VueKitRouter => {
  const vueRouter = vueCreateRouter(vueRouterOptions);

  const vueKitRouter: VueKitRouter = {
    vueRouter,
    installMiddlewares: (middlewares) => installVueKitMiddlewares(vueRouter, middlewares),
  };

  return vueKitRouter;
};

export {
  defineVueKitMiddleware,
  defineVueKitMiddlewares,
  defineVueKitRouteEntities,
  defineVueKitRouteEntity,
} from './helpers';

export * from './types';
