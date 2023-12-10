import { defineVueKitPlugin } from 'vue-kit';

export const asyncParralelPlugin = defineVueKitPlugin({
  install() {
    return new Promise((r) => {
      setTimeout(() => {
        console.log('async parralel plugin');
        r(undefined);
      }, 2000);
    });
  },
  isParralel: true,
});
