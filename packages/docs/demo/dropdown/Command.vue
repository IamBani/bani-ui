<template>
  <bn-dropdown :items="items" @command="handleCommand">
    <span class="dropdown-link">
      Dropdown List
      <bn-icon icon="angle-down" />
    </span>
  </bn-dropdown>
</template>

<script setup lang="ts">
import {
  type DropdownItemProps,
  type DropdownCommand,
  BnMessage,
} from "bani-ui";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleDown);
const items: DropdownItemProps[] = [
  { command: "1", label: "Action 1" },
  { command: "2", label: "Action 2" },
  { command: "3", label: "Action 3", disabled: true },
  { command: "4", label: "Action 4", divided: true },
];
function handleCommand(command: DropdownCommand) {
  BnMessage.info("click on item " + command);
}
</script>

<style scoped>
.dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--er-color-primary);

  i {
    margin-left: 8px;
  }
}
</style>
