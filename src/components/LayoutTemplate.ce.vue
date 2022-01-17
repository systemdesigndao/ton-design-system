<script>
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">

</script>

<template>
    <slot name="header" />
    <slot name="content" />
    <slot name="footer" />
</template>

<style>
::slotted(main) {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>