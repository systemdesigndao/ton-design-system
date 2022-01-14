<script setup lang="ts">
import './assets/styles/global.css';
</script>

<template>
  <layout-element>
    <main slot="content">
      <button-primary></button-primary>
      <spacing-block type="top" :payload="12"></spacing-block>
      <button-outline></button-outline>
      <spacing-block type="top" :payload="12"></spacing-block>
    </main>
  </layout-element>
</template>