<template>
  <li v-if="divided" role="separator" class="divided-placeholder"></li>
  <li
    :id="`dropdown-item-${command ?? useId().value}`"
    :class="{
      'er-dropdown__item': true,
      ['er-dropdown__item--' + size]: size,
      'is-disabled': disabled,
      'is-divided': divided,
    }"
    @click="handleClick"
  >
    <slot>
      {{ label }}
    </slot>
  </li>
</template>
<script setup lang="ts">
import { useId } from "@bani/hooks";
import type { DropdownItemProps } from "./types";
import { DROPDOWN_CTX_KEY } from "./constants";
import { computed, inject } from "vue";

defineOptions({
  name: "BnDropdownItem",
  inheritAttrs: false,
});
const props = withDefaults(defineProps<DropdownItemProps>(), {
  disabled: false,
  divider: false,
  command: useId().value,
});

const ctx = inject(DROPDOWN_CTX_KEY);
const size = computed(() => ctx?.size.value);

function handleClick() {
  if (props.disabled) return;
  ctx?.handleItemClick(props);
}
</script>

<style>
@import "./style.css";
</style>
