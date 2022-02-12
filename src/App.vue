<script setup lang="ts">
import './assets/styles/global.css';
import Details from './components/Details.vue';
import LayoutTemplate from './components/LayoutTemplate.vue';
</script>

<template>
  <LayoutTemplate>
    <template v-slot:header>
      <a class="header-logo"><div class="header-logo__name">TON Creation</div></a>
    </template>
    <template v-slot:content>
      <Details />
    </template>
  </LayoutTemplate>
</template>