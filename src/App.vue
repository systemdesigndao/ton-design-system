<script setup lang="ts">
import './assets/styles/global.css';
</script>

<template>
  <layout-element>
    <main slot="content">
      <button-primary link="https://t.me"></button-primary>
      <spacing-block type="top" :payload="12"></spacing-block>
      <button-outline link="https://github.com"></button-outline>
      <spacing-block type="top" :payload="12"></spacing-block>
      <text-black>
        <span slot="text">text black</span>
      </text-black>
      <text-bold>
        <span slot="text">text bold</span>
      </text-bold>
      <text-regular>
        <span slot="text">text regular</span>
      </text-regular>
      <text-white>
        <span slot="text">text white</span>
      </text-white>
      <ton-logo-dark></ton-logo-dark>
      <ton-logo-light></ton-logo-light>
      <ton-symbol></ton-symbol>
    </main>
  </layout-element>
</template>