<script setup lang="ts">

</script>

<template>
    <slot v-bind="$attrs" name="header" />
    <slot v-bind="$attrs" name="content" />
    <slot v-bind="$attrs" name="footer" />
</template>

<style>

</style>