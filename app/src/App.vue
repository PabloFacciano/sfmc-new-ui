<template>
  <!-- App.vue -->
  <div class="d-flex flex-column" style="height: 100vh;">
    <NoIframe v-if="!isIframe"/>
    <div v-if="isIframe" class="d-flex flex-column">
      <AppHeader />
      <router-view />
    </div>
  </div>
</template>

<script>
console.log(">>>> VUE APP START!");

import NoIframe from '@/components/NoIframe.vue';
import AppHeader from '@/components/AppHeader.vue';

export default {
  name: "Home",
  components: {
    NoIframe,
    AppHeader
  },
  computed: { 
    isIframe() {
      if(process.env.NODE_ENV === "production") {
        // No permitir fuera del iframe en PROD 
        try {
          return window.self !== window.top;
        } catch (e) {
          return false;
        }

      } else {
        // Permitir siempre en modo DEV
        return true;
      }
    }
  },
};
</script>

<style>


</style>