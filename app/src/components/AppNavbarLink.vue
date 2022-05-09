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
      <AppNavbarLink
        v-for="l in config?.children"
        :config="l"
        :key="to + l.to"
        :to="to + l.to"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["config", "to"],
  data() {
    return {
      hover: false
    };
  }
};
</script>

<style scoped>
</style>