<template>
  <div>
    Audience.vue
    <ul>
      <li><router-link class="nav-link rounded ms-2" to="./contacts">Contacts</router-link></li>
      <li><router-link class="nav-link rounded ms-2" to="./dataextensions">Data Extensions</router-link></li>
      <li><router-link class="nav-link rounded ms-2" to="./dataviews">Data Views</router-link></li>
      <li><router-link class="nav-link rounded ms-2" to="./subscription">Subscription</router-link></li>
      <li><router-link class="nav-link rounded ms-2" to="./classic">Classic</router-link></li>
      <li>----</li>
      <li><router-link class="nav-link rounded ms-2" to="../">Go back</router-link></li>
    </ul>
    <hr>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>