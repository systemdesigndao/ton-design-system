<template>
    <span class="text-regular">
        <slot name="text" />
    </span>
</template>

<style>
.text-regular ::slotted(*) {
  font-family: "mulish";
  color: black;
}
</style>