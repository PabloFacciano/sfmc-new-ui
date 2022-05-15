<template>
  <AppNavbarLink v-if="config.type == 'link'" :config="config.config" :to="config.to" />
  <AppNavbarSeparator v-else-if="config.type == 'separator'"/>
</template>

<script>
export default {
  props: ["config"],
  components: {},
  beforeCreate: function () {
    this.$options.components.AppNavbarLink = require('./AppNavbarLink.vue').default;
    this.$options.components.AppNavbarSeparator = require('./AppNavbarSeparator.vue').default;
  }
};
</script>

<style>

</style>