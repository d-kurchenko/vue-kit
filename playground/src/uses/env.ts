import { createGlobalState } from '@vueuse/core';
import { PublicEnvironmentVariables } from 'src/types';
import { validateEnvironmentVariables } from 'vue-kit';

export const usePublicEnvironmentVariables = createGlobalState(() => {
  const publicEnvironmentVariables = validateEnvironmentVariables(
    PublicEnvironmentVariables,
    import.meta.env,
  );

  return publicEnvironmentVariables;
});
