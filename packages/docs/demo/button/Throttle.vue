<script setup>
import { BnMessage } from "bani-ui";
function handleBtnClick() {
  BnMessage.info("btn click");
}
</script>

<template>
  <p>
    <bn-button @click="handleBtnClick"> with throttle</bn-button>
    <bn-button :use-throttle="false" @click="handleBtnClick"
      >without throttle</bn-button
    >
  </p>
</template>
