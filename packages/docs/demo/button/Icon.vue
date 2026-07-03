<template>
  <div>
    <bn-button type="primary" icon="edit" />
    <bn-button type="primary" icon="share" />
    <bn-button type="primary" icon="trash" />
    <bn-button type="primary" icon="search">Search</bn-button>
    <bn-button type="primary">
      Upload<bn-icon icon="upload" style="margin-left: 8px" />
    </bn-button>
  </div>
</template>

<script setup lang="ts">
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEdit,
  faShare,
  faTrash,
  faSearch,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";

library.add(faEdit, faShare, faTrash, faSearch, faUpload);
</script>
