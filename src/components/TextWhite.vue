<template>
    <span class="text-black">
        <slot name="text" />
    </span>
</template>

<style>
.text-black ::slotted(*) {
  font-family: "mulish-black";
  color: white;
}
</style>