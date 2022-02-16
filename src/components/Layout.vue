<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<template>
    <header class="header">
      <slot name="header" />
    </header>
    <main class="content">
      <slot name="content" />
    </main>
    <footer class="footer">
      <slot name="footer" />
    </footer>
</template>

<!-- TODO: Make chunking of pcss -->
<!-- <style scoped src="../assets/styles/layout.css">
</style> -->