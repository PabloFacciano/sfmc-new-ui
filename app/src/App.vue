<template>
  <!-- App.vue -->
  <div class="d-flex flex-column" style="height: 100vh;">
    <NoIframe v-if="!isIframe"/>
    <div v-if="isIframe" class="d-flex flex-column">
      <!-- Question -->
      <div class="bg-light px-3 px-2" v-if="showQuestion">
        <div>Welcome to the beta version of the new UI.</div>
        <button type="button" class="ms-3 btn btn-primary btn-sm" @click="showNewUI">
          Nice!
        </button>
        <button type="button" class="ms-2 btn btn-link" @click="dontShowNewUI">
          I want the previous version.
        </button>
        <div class="ms-auto text-muted">
          <small>UI redesign by Pablo Facciano.</small>
        </div>
      </div>
      <div class="h-100">
        <AppHeader />
        <router-view />
        <footer class="footer shadow mt-auto py-3 bg-light">
          <div class="container">
            <div class="d-flex justify-content-center">
              <span class="text-muted">Built with ♡ by Pablo Facciano.</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
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
    },
    url(){
      return window.location;
    }
  },
  mounted(){
    console.log(">>>> VUE APP START!", this);
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