<template>
  <bn-button :plain="true" @click="open2">Success</bn-button>
  <bn-button :plain="true" @click="open3">Warning</bn-button>
  <bn-button :plain="true" @click="open1">Message</bn-button>
  <bn-button :plain="true" @click="open4">Error</bn-button>
</template>

<script lang="ts" setup>
import { BnMessage } from "bani-ui";

const open1 = () => {
  BnMessage("This is a message.");
};
const open2 = () => {
  BnMessage({
    message: "Congrats, this is a success message.",
    type: "success",
  });
};
const open3 = () => {
  BnMessage({
    message: "Warning, this is a warning message.",
    type: "warning",
  });
};
const open4 = () => {
  BnMessage.error("Oops, this is a error message.");
};
</script>
