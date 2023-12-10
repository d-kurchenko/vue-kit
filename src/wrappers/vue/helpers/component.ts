import type { App as VueApp } from 'vue';
import { VueKitComponent } from '../types';

export const defineVueKitComponent = (
  name: string,
  component: VueKitComponent,
): VueKitComponent => ({
  name,
  component,
});

export const defineVueKitComponents = (components: VueKitComponent[]) => components;

export const useInstallVueKitComponents = (app: VueApp) => (components: VueKitComponent[]) => {
  components.forEach(({ name, component }) => {
    app.component(name, component);
  });
};
