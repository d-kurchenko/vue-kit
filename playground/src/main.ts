import { createVueKitApp } from 'vue-kit';
import App from './App.vue';
import { plugins } from './plugins';
import { vueKitRouter } from './router';
import { usePublicEnvironmentVariables } from './uses';

const vueKitApp = createVueKitApp(App);

vueKitApp.vueApp.use(vueKitRouter.vueRouter);

const publicEnvironmentVariables = usePublicEnvironmentVariables();

console.log(publicEnvironmentVariables);

await vueKitApp.installPlugins(plugins);

vueKitApp.vueApp.mount('#app');
