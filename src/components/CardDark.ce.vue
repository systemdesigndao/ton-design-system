<template>
    <div class="content-parent bg-dark">
        <slot name="content"></slot>
    </div>
</template>

<style>
.content-parent {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 192px;
    width: 100%;
    max-width: 340px;
    min-width: 300px;
    border-radius: 24px;
    flex-direction: column;
}

.bg-dark {
    background-color: #1B243D;
}
</style>