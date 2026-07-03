<template>
  <div class="row">
    <bn-dropdown :items="items" size="large" split-button>
      Large List
    </bn-dropdown>
    <bn-dropdown :items="items" split-button> Default List </bn-dropdown>
    <bn-dropdown :items="items" size="small" split-button>
      small List
    </bn-dropdown>
  </div>
</template>

<script setup lang="ts">
import { type DropdownItemProps } from "bani-ui";

const items: DropdownItemProps[] = [
  { command: "1", label: "Action 1" },
  { command: "2", label: "Action 2" },
  { command: "3", label: "Action 3", disabled: true },
  { command: "4", label: "Action 4", divided: true },
];
</script>

<style scoped>
.row div {
  margin-right: 16px;
}
</style>
