import { createVueKitRouter } from 'vue-kit';
import { createWebHistory } from 'vue-router';

// import { vueKitMiddlewares } from "./middlewares";
import { routes } from './routes';
import { vueKitMiddlewares } from './middlewares';

export const vueKitRouter = createVueKitRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

vueKitRouter.installMiddlewares(vueKitMiddlewares);
