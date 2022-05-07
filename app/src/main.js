import { createApp } from 'vue'
import router from './router'
import AppComponent from './App.vue'

// https://bestofvue.com/repo/MeForma-vue-toaster-vuejs-notification
import Toaster from "@meforma/vue-toaster";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(AppComponent)
.use(router)
.use(Toaster)
.mount('#app');
