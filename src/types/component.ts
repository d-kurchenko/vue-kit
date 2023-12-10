import type { AsyncComponentLoader, DefineComponent } from 'vue';

export type VueComponent = AsyncComponentLoader | DefineComponent<any, any, any>;
