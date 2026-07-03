<template>
  <bn-tooltip ref="tooltipRef" trigger="click" :hide-timeout="hideAfter">
    <template #content>
      <div class="er-popconfirm" :style="style">
        <div class="er-popconfirm__main">
          <bn-icon v-if="!hideIcon && icon" :icon="icon" :color="iconColor" />
          {{ title }}
        </div>
        <div class="er-popconfirm__action">
          <bn-button
            size="small"
            class="er-popconfirm__cancel"
            :type="cancelButtonType"
            @click="cancel"
          >
            {{ cancelButtonText || t("popconfirm.cancelButtonText") }}
          </bn-button>
          <bn-button
            size="small"
            class="er-popconfirm__confirm"
            :type="confirmButtonType"
            @click="confirm"
          >
            {{ confirmButtonText || t("popconfirm.confirmButtonText") }}
          </bn-button>
        </div>
      </div>
    </template>

    <template v-if="$slots.default" #default>
      <slot name="default"></slot>
    </template>

    <template v-if="$slots.reference" #reference>
      <slot name="reference"></slot>
    </template>
  </bn-tooltip>
</template>

<script setup lang="ts">
import type { PopconfirmEmits, PopconfirmProps } from "./types";
import type { TooltipInstance } from "../Tooltip/types";
import { computed, ref } from "vue";
import BnButton from "../Button/Button.vue";
import BnIcon from "../Icon/Icon.vue";
import BnTooltip from "../Tooltip/Tooltip.vue";
import { addUnit } from "@bani/utils";
import { useLocale } from "@bani/hooks";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

defineOptions({
  name: "BnPopconfirm",
});

const locale = useLocale();
const t = computed(() => locale.value.t);

const props = withDefaults(defineProps<PopconfirmProps>(), {
  title: "",
  confirmButtonType: "primary",
  iconColor: "#f90",
  hideAfter: 200,
  width: 150,
});

const icon = computed(() => props.icon ?? faQuestionCircle);

const emits = defineEmits<PopconfirmEmits>();
const tooltipRef = ref<TooltipInstance>();

const style = computed(() => ({ width: addUnit(props.width) }));

const hidePopper = () => {
  tooltipRef.value?.hide();
};

const cancel = (e: MouseEvent) => {
  emits("cancel", e);
  hidePopper();
};

const confirm = (e: MouseEvent) => {
  emits("confirm", e);
  hidePopper();
};
</script>

<style>
@import "./style.css";
</style>
