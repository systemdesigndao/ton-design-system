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
      <spacing-block type="top" :payload="12"></spacing-block>
      <text-bold>
        <span slot="text">text bold</span>
      </text-bold>
      <spacing-block type="top" :payload="12"></spacing-block>
      <text-regular>
        <span slot="text">text regular</span>
      </text-regular>
      <spacing-block type="top" :payload="12"></spacing-block>
      <text-white>
        <span slot="text">text white</span>
      </text-white>
      <spacing-block type="top" :payload="12"></spacing-block>
      <ton-logo-dark></ton-logo-dark>
      <spacing-block type="top" :payload="12"></spacing-block>
      <ton-logo-light></ton-logo-light>
      <spacing-block type="top" :payload="12"></spacing-block>
      <ton-symbol></ton-symbol>
      <spacing-block type="top" :payload="12"></spacing-block>
      <gem-logo-dark></gem-logo-dark>
      <spacing-block type="top" :payload="12"></spacing-block>
      <gem-logo-light></gem-logo-light>
      <spacing-block type="top" :payload="12"></spacing-block>
      <gem-symbol></gem-symbol>
    </main>
  </layout-element>
</template>