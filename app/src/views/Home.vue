<template>
  <div>
    <div class="d-flex align-items-center ps-2 py-2 bg-light" v-if="showQuestion">
      <p>Interested in trying out a new UI in Marketing Cloud?</p>
      <button type="button" class="ms-2 btn btn-primary btn-sm" @click="showNewUI">
        Yes
      </button>
      <button type="button" class="ms-2 btn btn-link" @click="dontShowNewUI">
        No, thanks
      </button>
      <p class="ms-auto text-muted">
        <small>New UI by Pablo Facciano</small>
      </p>
    </div>
    <div class="h-100" v-if="showIframe">
      %%=TreatAsContent(HTTPGet('https://mc.s10.exacttarget.com/cloud/#app/Marketing%20Cloud%20Dashboard/?ks=ks'))=%%
      <!--iframe class="h-100 w-100" style="border:none;" src=""></iframe-->
    </div>
    <footer class="footer shadow mt-auto py-3 bg-light" v-if="showFooter">
      <div class="container">
        <div class="d-flex justify-content-center">
          <span class="text-muted">Built with ♡ by Pablo Facciano.</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data(){
    return {
      showQuestion: true,
      showIframe: true,
      showFooter: false
    }
  },
  computed: {
    url(){
      return window.location;
    }
  },
  methods: {
    showNewUI(){
      this.showQuestion = false;
      this.showIframe = false;
      this.showFooter = true;
    },
    dontShowNewUI(){
      this.showQuestion = false;
      this.showIframe = true;
      this.showFooter = false;
    }
  }
}
</script>

<style>

</style>