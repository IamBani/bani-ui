<template>
  <bn-button :plain="true" @click="open">Show message</bn-button>
  <bn-button :plain="true" @click="openVn">VNode</bn-button>
</template>

<script lang="ts" setup>
import { h } from "vue";
import { BnMessage } from "bani-ui";

const open = () => {
  BnMessage("This is a message.");
};

const openVn = () => {
  BnMessage({
    message: h("p", { style: "line-height: 1; font-size: 14px" }, [
      h("span", null, "Message can be "),
      h("i", { style: "color: teal" }, "VNode"),
    ]),
  });
};
</script>
