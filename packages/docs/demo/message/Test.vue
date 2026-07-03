<template>
  <div>
    <bn-button @click="open1">插件式调用</bn-button>
    <bn-button @click="open2">函数式调用</bn-button>
  </div>
</template>

<script lang="ts" setup>
import { BnMessage } from "bani-ui";

const open1 = () => {
  BnMessage({
    message: "Congrats, this is a success message.",
    type: "success",
  });
};
const open2 = () => {
  BnMessage.success("Congrats, this is a success message.");
};
</script>
