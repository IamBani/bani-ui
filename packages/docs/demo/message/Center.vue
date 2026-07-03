<template>
  <bn-button plain @click="openCenter">Centered text</bn-button>
</template>

<script lang="ts" setup>
import { BnMessage } from "bani-ui";

const openCenter = () => {
  BnMessage({
    showClose: true,
    message: "Centered text",
    center: true,
  });
};
</script>
