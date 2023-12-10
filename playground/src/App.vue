<script setup lang="ts">
import { vueKitLayoutsSettings } from 'src/layouts';
import { useVueKitLayout } from 'vue-kit';

const layoutComponent = useVueKitLayout(vueKitLayoutsSettings);
</script>

<template>
  <component :is="layoutComponent" />
</template>
