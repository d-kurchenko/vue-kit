import { defineVueKitPlugins } from 'vue-kit';
import { syncPlugin } from './sync-plugin';
import { asyncParralelPlugin } from './async-parallel-plugin';
import { asyncPlugin } from './async-plugin';

export const plugins = defineVueKitPlugins([
  asyncParralelPlugin,
  asyncPlugin,
  syncPlugin,
]);
