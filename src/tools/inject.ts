import type { InjectionKey } from 'vue';
import { inject } from 'vue';

export const injectStrict = <T>(injectionKey: InjectionKey<T>) => {
  const injectionValue = inject(injectionKey);

  if (!injectionValue) {
    throw new Error(`Error while injectiong value with key ${injectionKey.toString()}`);
  }

  return injectionValue;
};
