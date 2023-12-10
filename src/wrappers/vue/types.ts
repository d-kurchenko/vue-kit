import { App as VueApp } from 'vue';

export type VueKitPlugin = {
  isParralel?: boolean;
  install: (vueKitApp: VueKitApp) => void | Promise<void>;
};

type VueComponent = Parameters<VueApp['component']>[1];

export type VueKitComponent = {
  name: string;
  component: VueComponent
};

export interface VueKitApp {
  vueApp: VueApp;
  installComponents: (components: VueKitComponent[]) => void;
  installPlugin: (plugin: VueKitPlugin) => Promise<VueKitApp>;
  installPlugins: (plugins: VueKitPlugin[]) => Promise<VueKitApp>;
}
