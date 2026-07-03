<template>
  <bn-button-group
    id="loading-container"
    v-loading.fullscreen.lock="loading"
    er-loading-text="加载中..."
    v-loading.lock.fullscreen="loading1"
  >
    <bn-button-group>
      <bn-button type="primary" plain @click="handleBtn">这是测试</bn-button>

      <bn-button :loading="loading" type="success" @click="handleBtn"
        >这是测试2</bn-button
      >
      <bn-button type="danger" disabled @click="handleBtn">这是测试3</bn-button>
      <bn-button type="warning" :icon="faEdit" @click="handleBtn"
        >这是测试4</bn-button
      >
    </bn-button-group>
  </bn-button-group>
  <bn-icon type="primary" size="2x" :icon="faAngleLeft"></bn-icon>
  <bn-button type="info" round useThrottle @click="handleBtn"
    >这是测试1</bn-button
  >
  <bn-button :icon="faSearch" type="primary" circle />
  <bn-button type="primary">
    Upload<bn-icon icon="upload" style="margin-left: 8px" />
  </bn-button>
  <bn-button-group type="warning" size="small">
    <bn-button type="primary" :icon="faEdit" round />
    <bn-button type="primary" :icon="faShare" />
    <bn-button type="primary" :icon="faTrash" round />
  </bn-button-group>
  <bn-button size="small" @click="handleLoading">Small</bn-button>

  <!-- 虚拟触发示例：触发按钮在 Tooltip 外部 -->
  <bn-button ref="triggerBtn" type="primary" style="margin-left: 20px">
    虚拟触发按钮
  </bn-button>
  <bn-tooltip
    content="这是虚拟触发的 Tooltip"
    placement="top"
    virtualTriggering
    :manual="false"
    :virtualRef="triggerBtnEl"
  >
    <!-- 占位元素，仅用于渲染 Tooltip 位置 -->
    <div style="display: inline-block; width: 10px"></div>
  </bn-tooltip>

  <bn-popconfirm title="Are you shure to delete this item?">
    <bn-button ref="deleteBtn" type="danger">Delete</bn-button>
  </bn-popconfirm>

  <bn-dropdown split-button :items="items" type="primary">
    {{ text }}
  </bn-dropdown>
  <bn-config-provider :locale="locale">
    <bn-button type="primary" @click="handleBtnLocale">这是测试5</bn-button>
    <bn-popconfirm title="Are you shure to delete this item?">
      <bn-button>Delete</bn-button>
    </bn-popconfirm>
  </bn-config-provider>
</template>

<script setup lang="ts">
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faAngleLeft,
  faEdit,
  faUpload,
  faSearch,
  faShare,
  faTrash,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { computed, onMounted, ref } from "vue";
import { en, zhCn } from "bani-ui/es/locale";

import { BnMessage, BnButtonGroup } from "bani-ui";
import type {
  TooltipInstance,
  ButtonInstance,
  DropdownItemProps,
} from "bani-ui";

library.add(faUser, faAngleLeft, faEdit, faSearch, faUpload, faShare, faTrash);
const loading = ref(false);
const loading1 = ref(false);

const locale = ref(zhCn);

const handleBtnLocale = () => {
  locale.value = Math.random() > 0.5 ? en : zhCn;
  console.log(locale.value);
};

const handleBtn = (e: MouseEvent) => {
  console.log(e);
  loading.value = true;
  setTimeout(() => {
    // loading.value = false;
    BnMessage.success("这是成功消息");
    BnMessage.error("这是错误消息");
    BnMessage.warning("这是警告消息");
    BnMessage.info("这是信息消息");
  }, 1000);
};
const handleLoading = () => {
  loading1.value = true;
  setTimeout(() => {
    // loading1.value = false;
  }, 1000);
};
const handleVisibleChange = (visible: boolean) => {
  console.log(visible);
};
const tooltipRef = ref<TooltipInstance>();
const deleteBtnRef = ref<ButtonInstance>();
const triggerBtn = ref<ButtonInstance>();

// 获取虚拟触发按钮的真实 DOM
const triggerBtnEl = computed(() => {
  console.log(triggerBtn.value?.ref);
  return triggerBtn.value?.ref;
});

const items = ref<DropdownItemProps[]>([
  {
    label: "Item 1",
    command: "item1",
    disabled: true,
  },
  {
    label: "Item 2",
    command: "item2",
  },
  {
    label: "Item 3",
    command: "item3",
  },
]);
let text = ref("Dropdown List");
</script>

<style scoped></style>
