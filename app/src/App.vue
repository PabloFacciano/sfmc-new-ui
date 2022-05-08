<template>
  <!-- App.vue -->
  <div class="d-flex flex-column" style="height: 100vh;">
    <NoIframe v-if="!isIframe"/>
    <div v-if="isIframe" class="d-flex flex-column h-100">
      <!-- Question -->
      <div class="d-flex align-items-center justify-content-between bg-dark text-light px-3 py-2" v-if="showQuestion">
        <div>Welcome to the beta version of the new UI.</div>
        <div>
          <button type="button" class="ms-3 btn btn-light btn-sm" @click="showNewUI">
            Nice!
          </button>
          <button type="button" class="ms-2 btn btn-link text-light" @click="dontShowNewUI">
            No, thanks.
          </button>
        </div>
      </div>
      <!-- Content -->
      <div class="d-flex flex-column h-100">
        <AppNavbar />
        <router-view />
        <footer class="footer mt-auto py-1 px-3 bg-dark text-light">
          <div class="d-flex justify-content-center">
            <span class="text-muted">UI redesign with ♡ by Pablo Facciano.</span>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import NoIframe from '@/components/NoIframe.vue';
import AppNavbar from '@/components/AppNavbar.vue';

export default {
  name: "Home",
  components: {
    NoIframe,
    AppNavbar
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
    },
    url(){
      return window.location;
    }
  },
  mounted(){
    
  },
  data(){
    return {
      showQuestion: true
    }
  },
  methods: {
    showNewUI(){
      this.showQuestion = false;
    },
    dontShowNewUI(){
      window.location = 'https://mc.s10.exacttarget.com/cloud/#app/Marketing%20Cloud%20Dashboard/?ks=ks';
    }
  }
};
</script>

<style>


</style>