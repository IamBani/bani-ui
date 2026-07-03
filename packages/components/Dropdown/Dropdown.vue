<template>
  <div class="er-dropdown" :class="{ 'is-disabled': props.disabled }">
    <bn-tooltip
      ref="tooltipRef"
      v-bind="tooltipProps"
      :virtual-triggering="splitButton"
      :virtual-ref="virtualRef"
      @visible-change="$emit('visible-change', $event)"
    >
      <bn-button-group
        v-if="splitButton"
        :type="type"
        :size="size"
        :disabled="disabled"
      >
        <bn-button @click="$emit('click', $event)">
          <slot name="default"></slot>
        </bn-button>
        <bn-button ref="triggerRef" icon="angle-down" />
      </bn-button-group>
      <slot name="default" v-else></slot>
      <template #content>
        <div class="er-dropdown__menu">
          <slot name="dropdown">
            <template v-for="item in items" :key="item.command">
              <bn-dropdown-item v-bind="item" />
            </template>
          </slot>
        </div>
      </template>
    </bn-tooltip>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref } from "vue";
import type { TooltipInstance } from "../Tooltip/types";
import type {
  DropdownContext,
  DropdownEmits,
  DropdownInstance,
  DropdownItemProps,
  DropdownProps,
} from "./types";
import type { ButtonInstance } from "../Button/types";
import { isNil, omit } from "lodash-es";
import { DROPDOWN_CTX_KEY } from "./constants";
import BnDropdownItem from "./DropdownItem.vue";
import BnButtonGroup from "../ButtonGroup/ButtonGroup.vue";
import BnButton from "../Button/Button.vue";
import BnTooltip from "../Tooltip/Tooltip.vue";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faAngleDown);

defineOptions({
  name: "BnDropdown",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<DropdownProps>(), {
  hideOnClick: true,
  items: () => [] as DropdownItemProps[],
});
const emits = defineEmits<DropdownEmits>();
const slot = defineSlots();

const tooltipRef = ref<TooltipInstance>();
const triggerRef = ref<ButtonInstance>();

const virtualRef = computed(() => {
  return triggerRef.value?.ref ?? void 0;
});
const tooltipProps = computed(() =>
  omit(props, ["items", "hideAfterClick", "size", "type", "splitButton"]),
);

function handleItemClick(e: DropdownItemProps) {
  props.hideOnClick && tooltipRef.value?.hide();
  !isNil(e.command) && emits("command", e.command);
}

provide<DropdownContext>(DROPDOWN_CTX_KEY, {
  handleItemClick,
  size: computed(() => props.size),
});

defineExpose<DropdownInstance>({
  open: () => tooltipRef.value?.show(),
  close: () => tooltipRef.value?.hide(),
});
</script>

<style>
@import "./style.css";
.er-button-group {
  & > :last-child {
    padding: 5px 7px;
  }
}
</style>
