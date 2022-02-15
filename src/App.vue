<script setup lang="ts">
import './assets/styles/global.css';
import Details from './components/Details.vue';
import Layout from './components/Layout.vue';
</script>

<template>
  <Layout>
    <template v-slot:header>
      <a><span class="text-default">TON Creation</span></a>
    </template>
    <template v-slot:content>
      <Details />
    </template>
    <template v-slot:footer>
      <a className="d-flex center-align center-items"><span class="text-default">Based on</span><img class="w-20 m-l-1" src="/icons/ton-logo-light.svg" alt="Logo" /></a>
    </template>
  </Layout>
</template>