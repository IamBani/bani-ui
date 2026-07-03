<template>
  <bn-button @click="changelang" type="info" style="margin-right: 20px"
    >change language</bn-button
  >
  <bn-config-provider :locale="locale">
    <bn-popconfirm title="Are you shure to delete this item?">
      <bn-button>Delete</bn-button>
    </bn-popconfirm>
  </bn-config-provider>
</template>

<script setup lang="ts">
import { BnConfigProvider } from "bani-ui";
import { ja, ko, en, zhCn, zhTw } from "bani-ui/es/locale";
import { get } from "lodash-es";
import { computed, ref } from "vue";

const language = ref("");
const langMap = {
  ja,
  ko,
  en,
  zhCn,
  zhTw,
} as const;
const locale = computed(() => get(langMap, language.value));
const changelang = () => {
  const l = ["zhCn", "zhTw", "ko", "en", "ja"];
  language.value = l[(l.indexOf(language.value) + 1) % l.length];
};
</script>
