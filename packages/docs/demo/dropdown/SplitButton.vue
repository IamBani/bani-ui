<template>
  <div class="row">
    <bn-dropdown :items="items">
      <bn-button type="primary">
        Dropdown List
        <bn-icon icon="angle-down" style="margin-left: 8px" />
      </bn-button>
    </bn-dropdown>
    <bn-dropdown
      :items="items"
      type="primary"
      @click="handleClick"
      split-button
    >
      Dropdown List
    </bn-dropdown>
  </div>
</template>

<script setup lang="ts">
import { type DropdownItemProps, BnMessage } from "bani-ui";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleDown);

const items: DropdownItemProps[] = [
  { command: "1", label: "Action 1" },
  { command: "2", label: "Action 2" },
  { command: "3", label: "Action 3", disabled: true },
  { command: "4", label: "Action 4", divided: true },
];

function handleClick() {
  BnMessage.info("button click");
}
</script>

<style scoped>
.row div {
  margin-right: 16px;
}
</style>
