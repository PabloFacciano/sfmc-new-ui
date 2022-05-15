<template>
  <div class="dropdown d-flex">
    <!-- Link -->
    <router-link
      class="btn dropdown-item w-100 text-start m-1"
      :to="to"
      @mouseover="hover = true"
      @click="hover = false"
      >
      <span>{{ config?.label ?? "F" }}</span>
      <span v-if="config?.children?.length > 0" class="ms-2 dropdown-toggle"></span>
    </router-link>
    <!-- DropdownItems -->
    <div
      class="dropdown-menu show shadow-sm p-0" style="margin-left: 100%;"
      v-if="config?.children?.length > 0 && hover"
      @mouseleave="hover = false"
      @click="hover = false"
    >
      <AppNavbarItem v-for="l in config?.children" :key="to + l.to" :config="{ config: l, to: to + l.to, type: l.type}" />
    </div>
  </div>
</template>

<script>
import AppNavbarItem from './AppNavbarItem.vue'
export default {
  props: ["config", "to"],
  components: { AppNavbarItem },
  data() {
    return {
      hover: false
    };
  }
};
</script>

<style scoped>
</style>