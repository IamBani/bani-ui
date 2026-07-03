<template>
  <slot name="default" :config="config"></slot>
</template>

<script setup lang="ts">
import { provideGlobalConfig } from "./hooks";
import type { ConfigProviderProps } from "./types";
defineOptions({
  name: "BnConfigProvider",
  inheritAttrs: false,
});
const props = defineProps<ConfigProviderProps>();

const config = provideGlobalConfig(props);
</script>

<style>
@import "./style.css";
</style>
