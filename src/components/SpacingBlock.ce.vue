<template>
    <div :class="`${type}-${payload}`"></div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';
import { SpacingTypes, SpacingValues } from '../types/Spacing';

// TODO: Add setup and working props
export default defineComponent({
  props: {
    type: String as PropType<SpacingTypes>,
    payload: Number as PropType<SpacingValues>,
  }
})
</script>

<style lang="css">
/* top */
.top-16 {
  margin-top: 16px;
}
.top-12 {
  margin-top: 12px;
}
.top-8 {
  margin-top: 8px;
}
.top-6 {
  margin-top: 6px;
}
.top-2 {
  margin-top: 2px;
}
/* right */
.right-16 {
  margin-right: 16px;
}
.right-12 {
  margin-right: 12px;
}
.right-8 {
  margin-right: 8px;
}
.right-6 {
  margin-right: 6px;
}
.right-2 {
  margin-right: 2px;
}
/* bottom */
.bottom-16 {
  margin-bottom: 16px;
}
.bottom-12 {
  margin-bottom: 12px;
}
.bottom-8 {
  margin-bottom: 8px;
}
.bottom-6 {
  margin-bottom: 6px;
}
.bottom-2 {
  margin-bottom: 2px;
}
/* left */
.left-16 {
  margin-left: 16px;
}
.left-12 {
  margin-left: 12px;
}
.left-8 {
  margin-left: 8px;
}
.left-6 {
  margin-left: 6px;
}
.left-2 {
  margin-left: 2px;
}
</style>