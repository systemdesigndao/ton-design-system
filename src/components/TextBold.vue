<template>
    <span class="text-bold">
        <slot name="text" />
    </span>
</template>

<style>
.text-bold ::slotted(*) {
  font-family: "mulish-bold";
  color: black;
}
</style>