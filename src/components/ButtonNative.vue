<script setup lang="ts">
import { computed } from "vue";

type Props = { type: string };

const props = withDefaults(defineProps<Props>(), { 
  type: '',
});

const btnType = computed(() => `btn-${props.type}`);
</script>

<template>
  <button :class="`btn ${btnType}`">
    <slot name="content" />
  </button>
</template>

<style lang="css">
/* default button */
.btn {
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  border-radius: 24px;
  text-align: center;
}

.btn img {
  margin-right: 4px;
}

/* primary button */
.btn-primary {
  background: var(--primary-color);
  padding: 12px 32px 12px 28px;
  outline: none;
  border: none;
  transition: all .3s;
}

.btn-primary:hover {
  background: var(--primary-color-hovered);
  transition: all .3s;
}

.btn-primary > ::slotted(div) {
  display: flex;
  align-items: center;
  font-family: "mulish-black";
  color: white;
}

/* outline button */
.btn-outline {
  background: #fff;
  padding: 10px 32px 10px 28px;
  outline: none;
  border: 2px solid #0088CC;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}

.btn-outline:hover {
  border-width: 3px;
  padding: 5px 31px 5px 29px;
  padding: 9px 31px 9px 27px;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}

.btn-outline > ::slotted(div) {
  display: flex;
  align-items: center;
  font-family: "mulish-black";
  color: black;
}
</style>