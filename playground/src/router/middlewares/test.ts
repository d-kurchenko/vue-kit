import { defineVueKitMiddleware } from 'vue-kit';

export const testMiddleware = defineVueKitMiddleware(async (to) => {
  console.log('Route name: ', to.name);
});
