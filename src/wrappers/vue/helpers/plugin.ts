import { VueKitApp, VueKitPlugin } from '../types';
import { usePlugin } from '../uses';

export const defineVueKitPlugin = (plugin: VueKitPlugin) => plugin;

export const defineVueKitPlugins = (plugins: VueKitPlugin[]) => plugins;

const { installPlugin, installPlugins } = usePlugin();

export const installVueKitPlugin = (
  app: VueKitApp,
  plugin: VueKitPlugin,
) => installPlugin(app, plugin);

export const installVueKitPlugins = (
  app: VueKitApp,
  plugins: VueKitPlugin[],
) => installPlugins(app, plugins);
