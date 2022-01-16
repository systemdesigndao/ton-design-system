<script setup lang="ts">
import {openLinkInNewTab} from '../helpers';

type Props = { link?: string };

defineProps<Props>();
</script>

<template>
  <button-native type="primary" @click="openLinkInNewTab(link)">
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