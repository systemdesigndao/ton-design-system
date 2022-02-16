<script setup lang="ts">
import {openLinkInNewTab} from '../helpers';

type Props = { link?: string };

defineProps<Props>();
</script>

<template>
  <button-native type="outline" @click="openLinkInNewTab(link)">
    <div slot="content">
      <img src="/icons/github.svg" alt="telegram-svg">
      <text-black>
        <span slot="text">Github</span>
      </text-black>
    </div>
  </button-native>
</template>