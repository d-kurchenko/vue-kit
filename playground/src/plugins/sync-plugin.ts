import { defineVueKitPlugin } from 'vue-kit';

export const syncPlugin = defineVueKitPlugin({
  install() {
    console.log('sync plugin');
  },
});
