<template>
  <button-native type="primary">
    <div slot="content">
      <img src="/icons/telegram.svg" alt="telegram-svg">
      <span>
        <span class="xs-hide">Telegram</span> 
        <span>Channel</span>
      </span>
    </div>
  </button-native>
</template>

<style lang="css">
.xs-hide {
    display: none;
}

@media screen and (min-width: 1000px) {
    .xs-hide {
        display: inline;
    }
}

</style>