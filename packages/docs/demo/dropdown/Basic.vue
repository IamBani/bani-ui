<template>
  <div class="row">
    <div class="col">
      <div class="desc">通过 slot 传入 item</div>
      <bn-dropdown>
        <span class="dropdown-link">
          Dropdown List
          <bn-icon icon="angle-down" />
        </span>
        <template #dropdown>
          <bn-dropdown-item command="1">Action 1</bn-dropdown-item>
          <bn-dropdown-item command="2" label="Action 2" />
          <bn-dropdown-item command="3" disabled>Action 3</bn-dropdown-item>
          <bn-dropdown-item command="4" divided>Action 4</bn-dropdown-item>
        </template>
      </bn-dropdown>
    </div>
    <div class="col">
      <div class="desc">通过 props 传入 item</div>
      <bn-dropdown :items="items">
        <span class="dropdown-link">
          Dropdown List
          <bn-icon icon="angle-down" />
        </span>
      </bn-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type DropdownItemProps } from "bani-ui";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleDown);
const items: DropdownItemProps[] = [
  { command: "1", label: "Action 1" },
  { command: "2", label: "Action 2" },
  { command: "3", label: "Action 3", disabled: true },
  { command: "4", label: "Action 4", divided: true },
];
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
.col {
  flex: 1;
}
.desc {
  display: block;
  color: var(--er-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
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
