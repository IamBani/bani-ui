<template>
  <bn-button @click="() => dropdownRef?.open()">open</bn-button>
  <bn-button @click="() => dropdownRef?.close()">close</bn-button>
  <br />
  <bn-dropdown ref="dropdownRef" :items="items">
    <span class="dropdown-link">
      Dropdown List
      <bn-icon icon="angle-down" />
    </span>
  </bn-dropdown>
</template>

<script setup lang="ts">
import type { DropdownItemProps, DropdownInstance } from "bani-ui";
import { ref } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleDown);

const items: DropdownItemProps[] = [
  { command: "1", label: "Action 1" },
  { command: "2", label: "Action 2" },
  { command: "3", label: "Action 3", disabled: true },
  { command: "4", label: "Action 4", divided: true },
];
const dropdownRef = ref<DropdownInstance>();
</script>

<style scoped>
.dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--er-color-primary);
  margin-top: 20px;
  i {
    margin-left: 8px;
  }
}
</style>
