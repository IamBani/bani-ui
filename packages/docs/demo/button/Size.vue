<template>
  <p>
    <bn-button size="large">Large</bn-button>
    <bn-button>Default</bn-button>
    <bn-button size="small">Small</bn-button>
    <bn-button size="large" icon="search">Search</bn-button>
    <bn-button icon="search">Search</bn-button>
    <bn-button size="small" icon="search">Search</bn-button>
  </p>
  <p>
    <bn-button size="large" round>Large</bn-button>
    <bn-button round>Default</bn-button>
    <bn-button size="small" round>Small</bn-button>
    <bn-button size="large" icon="search" round>Search</bn-button>
    <bn-button icon="search" round>Search</bn-button>
    <bn-button size="small" icon="search" round>Search</bn-button>
  </p>
  <p>
    <bn-button size="large" icon="search" circle />
    <bn-button icon="search" circle />
    <bn-button size="small" icon="search" circle />
  </p>
</template>

<script setup lang="ts">
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);
</script>
