import { createApp as vueCreateApp } from 'vue';
import { VueKitApp } from './types';
import { installVueKitPlugin, installVueKitPlugins, useInstallVueKitComponents } from './helpers';

export const createVueKitApp = (
  ...createAppVueParameters: Parameters<typeof vueCreateApp>
): VueKitApp => {
  const vueApp = vueCreateApp(...createAppVueParameters);

  const vueKitApp: VueKitApp = {
    vueApp,
    installComponents: useInstallVueKitComponents(vueApp),
    installPlugin: async (plugin) => installVueKitPlugin(vueKitApp, plugin),
    installPlugins: async (plugins) => installVueKitPlugins(vueKitApp, plugins),
  };

  return vueKitApp;
};

export {
  defineVueKitComponent,
  defineVueKitComponents,
  defineVueKitPlugin,
  defineVueKitPlugins,
} from './helpers';

export * from './types';
