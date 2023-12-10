import {
  defineVueKitLayout,
  defineVueKitLayouts,
  defineVueKitLayoutsSettings,
} from 'vue-kit';

import DefaultLayout from './DefaultLayout.vue';

const defaultLayout = defineVueKitLayout({
  name: 'default',
  component: DefaultLayout,
});

const layouts = defineVueKitLayouts([
  defaultLayout,
  {
    name: 'empty',
    component: () => import('./EmptyLayout.vue'),
  },
]);

export const vueKitLayoutsSettings = defineVueKitLayoutsSettings({
  defaultLayout,
  layouts,
});
