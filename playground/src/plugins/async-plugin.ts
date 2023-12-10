import { defineVueKitPlugin } from 'vue-kit';

export const asyncPlugin = defineVueKitPlugin({
  install() {
    return new Promise((r) => {
      setTimeout(() => {
        console.log('async plugin');
        r(undefined);
      }, 2000);
    });
  },
});
