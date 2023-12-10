import { createGlobalState, watchOnce } from '@vueuse/core';
import { computed, ref } from 'vue';
import { VueKitApp, VueKitPlugin } from '../types';

export const usePlugin = createGlobalState(() => {
  const installedPlugins = new WeakSet<VueKitPlugin>();

  const installPlugin = async (app: VueKitApp, plugin: VueKitPlugin) => {
    if (installedPlugins.has(plugin)) {
      console.warn('Plugin has already been applied to target app.');
    }
    installedPlugins.add(plugin);

    await plugin.install(app);

    return app;
  };

  const installPlugins = async (app: VueKitApp, plugins: VueKitPlugin[]) => {
    let parralelPluginsCount = 0;
    const parralelPluginsIstalledCount = ref(0);

    const installParralelPlugin = async (plugin: VueKitPlugin) => {
      parralelPluginsCount += 1;
      await plugin.install(app);
      parralelPluginsIstalledCount.value += 1;
    };

    const isParralelPluginsInstalled = computed(
      () => parralelPluginsIstalledCount.value === parralelPluginsCount,
    );

    for await (const plugin of plugins) {
      if (installedPlugins.has(plugin)) {
        console.warn('Plugin has already been applied to target app.');
      }
      installedPlugins.add(plugin);
    }

    for await (const plugin of plugins) {
      if (plugin.isParralel) {
        installParralelPlugin(plugin);
      } else {
        await plugin.install(app);
      }
    }

    return new Promise<VueKitApp>((resolve) => {
      if (!isParralelPluginsInstalled.value) {
        watchOnce(isParralelPluginsInstalled, () => {
          resolve(app);
        });
      } else {
        resolve(app);
      }
    });
  };

  return {
    installPlugin,
    installPlugins,
  };
});
