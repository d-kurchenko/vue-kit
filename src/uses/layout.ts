import {
  type AsyncComponentLoader,
  computed, shallowRef, watch,
} from 'vue';
import { defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';

import type { VueComponent, VueKitLayoutsManagerSettings } from '../types';

export const useVueKitLayout = (layoutsSettings: VueKitLayoutsManagerSettings) => {
  const { defaultLayout, layouts } = layoutsSettings;

  const route = useRoute();
  const layoutComponent = shallowRef<VueComponent>();

  watch(() => route.meta.layout, (layoutName) => {
    if (!layoutName) {
      layoutComponent.value = defaultLayout.component;
    } else {
      const currentLayout = layouts.find((layout) => layout.name === layoutName);
      if (!currentLayout) {
        throw new Error(`Layout with name ${layoutName} not found in layouts`);
      }

      layoutComponent.value = currentLayout.component;
    }
  }, {
    immediate: true,
  });

  const computedLayoutComponent = computed(() => {
    if (typeof layoutComponent.value === 'function') {
      return defineAsyncComponent(layoutComponent.value as AsyncComponentLoader);
    }

    return layoutComponent.value;
  });

  return computedLayoutComponent;
};
