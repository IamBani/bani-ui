<template>
  <p>
    <bn-button-group disabled>
      <bn-button type="primary" icon="arrow-left">Previous Page</bn-button>
      <bn-button type="primary">
        Next Page<bn-icon icon="arrow-right" style="margin-left: 8px" />
      </bn-button>
    </bn-button-group>
  </p>
  <p>
    <bn-button-group type="warning" size="small">
      <bn-button type="primary" icon="edit" round />
      <bn-button type="primary" icon="share" />
      <bn-button type="primary" icon="trash" round />
    </bn-button-group>
  </p>
</template>

<script setup lang="ts">
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faArrowRight,
  faEdit,
  faShare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

library.add(faArrowLeft, faArrowRight, faEdit, faShare, faTrash);
</script>
