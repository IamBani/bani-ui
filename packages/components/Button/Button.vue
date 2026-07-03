<template>
  <component
    :is="props.tag"
    ref="_ref"
    class="er-button"
    :autofocus="autofocus"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading"
    :class="{
      [`er-button--${type}`]: type,
      [`er-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    @click="
      (e: MouseEvent) =>
        useThrottle ? handleBthClickThrottle(e) : handleBthClick(e)
    "
  >
    <template v-if="loading">
      <slot name="loading">
        <bn-icon
          class="loading-icon"
          :icon="loadingIcon ?? faSpinner"
          :style="iconStyle"
          size="1x"
          spin
        ></bn-icon>
      </slot>
    </template>
    <bn-icon
      v-if="icon && !loading"
      :icon="icon"
      size="1x"
      :style="iconStyle"
    ></bn-icon>
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed, ref, inject } from "vue";
import type { ButtonProps, ButtonEmits, ButtonInstance } from "./types";
import { throttle } from "lodash-es";
import BnIcon from "../Icon/Icon.vue";
import { BUTTON_GROUP_CTX_KEY } from "./constants";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faSpinner);
defineOptions({
  name: "BnButton",
});

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
  useThrottle: true,
  throttleDuration: 500,
});

/**
 * @description: 依赖注入
 */
const ctx = inject(BUTTON_GROUP_CTX_KEY, void 0);
const size = computed(() => ctx?.size ?? props.size ?? "");
const type = computed(() => ctx?.type ?? props.type ?? "");
const disabled = computed(() => ctx?.disabled || props.disabled || false);

const emits = defineEmits<ButtonEmits>();

const slots = defineSlots();
const _ref = ref<HTMLButtonElement>();
const iconStyle = computed(() => ({
  marginRight: slots.default ? "6px" : "0px",
}));

const handleBthClick = (e: MouseEvent) => emits("click", e);
const handleBthClickThrottle = throttle(
  handleBthClick,
  props.throttleDuration,
  { trailing: false },
);
defineExpose<ButtonInstance>({
  get ref() {
    return _ref.value ?? void 0;
  },
  disabled,
  size,
  type,
});
</script>

<style>
@import "./style.css";
</style>
