<template>
  <bn-tooltip
    :disabled="disabled"
    content="click to close tooltip function"
    placement="bottom"
  >
    <bn-button @click="disabled = !disabled"
      >click to {{ disabled ? "active" : "close" }} tooltip function</bn-button
    >
  </bn-tooltip>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const disabled = ref(false);
</script>
