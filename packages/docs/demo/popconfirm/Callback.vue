<template>
  <bn-popconfirm
    width="220"
    confirm-button-text="Delete"
    cancel-button-text="No,Thanks"
    icon="trash"
    icon-color="#626aef"
    title="Are you sure to delete this item?"
    @confirm="BnMessage.success('Delete Success')"
    @cancel="BnMessage.info('Cancel')"
  >
    <bn-button>Delete</bn-button>
  </bn-popconfirm>
</template>

<script setup lang="ts">
import { BnMessage } from "bani-ui";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);
</script>
