import { defineVueKitMiddlewares } from 'vue-kit';

import { testMiddleware } from './test';

export const vueKitMiddlewares = defineVueKitMiddlewares([testMiddleware]);
