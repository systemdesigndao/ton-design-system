<template>
  <layout-element>
    <div slot="content">
      <button-primary></button-primary>
      <spacing-block type="top" :payload="12"></spacing-block>
      <button-outline></button-outline>
      <spacing-block type="top" :payload="12"></spacing-block>
    </div>
  </layout-element>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({});
</script>

<style>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
</style>