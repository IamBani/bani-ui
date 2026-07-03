<template>
  <div>
    <bn-button type="primary" loading>Loading</bn-button>
    <bn-button type="primary" loading-icon="circle-notch" loading
      >Loading</bn-button
    >
    <bn-button type="primary" loading>
      <template #loading>
        <bn-icon style="margin-right: 6px" icon="star" spin />
      </template>
      Loading
    </bn-button>
  </div>
</template>

<script setup lang="ts">
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleNotch, faStar } from "@fortawesome/free-solid-svg-icons";

library.add(faCircleNotch, faStar);
</script>
