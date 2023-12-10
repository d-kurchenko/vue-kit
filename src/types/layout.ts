import type { VueComponent } from './component';

export type VueKitLayout = {
  name: string;
  component: VueComponent;
};

export type VueKitLayoutsManagerSettings = {
  defaultLayout: VueKitLayout;
  layouts: VueKitLayout[]
};
