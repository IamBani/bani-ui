<template>
  <div class="er-button-group">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import type { ButtonGroupProps } from "./types";
import { provide, reactive, toRef } from "vue";
import { BUTTON_GROUP_CTX_KEY } from "../Button/constants";

defineOptions({
  name: "BnButtonGroup",
});

const props = defineProps<ButtonGroupProps>();
provide(
  BUTTON_GROUP_CTX_KEY,
  reactive({
    size: toRef(props, "size"),
    type: toRef(props, "type"),
    disabled: toRef(props, "disabled"),
  }),
);
</script>

<style>
@import "./style.css";
</style>
