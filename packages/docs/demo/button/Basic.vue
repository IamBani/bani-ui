<template>
  <p>
    <bn-button>Default</bn-button>
    <bn-button type="primary">Primary</bn-button>
    <bn-button type="success">Success</bn-button>
    <bn-button type="info">Info</bn-button>
    <bn-button type="warning">Warning</bn-button>
    <bn-button type="danger">Danger</bn-button>
  </p>

  <p>
    <bn-button plain>Plain</bn-button>
    <bn-button type="primary" plain>Primary</bn-button>
    <bn-button type="success" plain>Success</bn-button>
    <bn-button type="info" plain>Info</bn-button>
    <bn-button type="warning" plain>Warning</bn-button>
    <bn-button type="danger" plain>Danger</bn-button>
  </p>

  <p>
    <bn-button round>Round</bn-button>
    <bn-button type="primary" round>Primary</bn-button>
    <bn-button type="success" round>Success</bn-button>
    <bn-button type="info" round>Info</bn-button>
    <bn-button type="warning" round>Warning</bn-button>
    <bn-button type="danger" round>Danger</bn-button>
  </p>

  <p>
    <bn-button icon="search" circle />
    <bn-button type="primary" icon="edit" circle />
    <bn-button type="success" icon="check" circle />
    <bn-button type="info" icon="message" circle />
    <bn-button type="warning" icon="star" circle />
    <bn-button type="danger" icon="trash" circle />
  </p>
</template>

<script setup lang="ts">
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEdit,
  faMessage,
  faTrash,
  faCheck,
  faStar,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

library.add(faEdit, faMessage, faTrash, faCheck, faStar, faSearch);
</script>
