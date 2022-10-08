<script setup>
// make importFromComponents('GetLogoLight')
import GemLogoLight from '../components/GemLogoLight.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <div>
        <GemLogoLight />
      </div>
      <div>
        <b class="m-r-1">{{ user?.wallet }}</b>
        <my-button size="small" @click="$emit('logout')" label="Log out" v-if="user" />
        <my-button size="small" @click="$emit('login')" label="Log in" v-if="!user" />
        <my-button primary size="small" @click="$emit('createAccount')" label="Create wallet" v-if="!user" />
      </div>
    </div>
  </header>
</template>

<script>
import './header.css';
import MyButton from './Button.vue';

export default {
  name: 'my-header',

  components: { MyButton },

  props: {
    user: {
      type: Object,
    },
  },

  emits: ['login', 'logout', 'createAccount'],
};
</script>
