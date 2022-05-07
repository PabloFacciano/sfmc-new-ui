<template>
  <div>Hello world! The url is: {{ this.url }}</div>
</template>

<script>
export default {
  computed: {
    url(){
      return window.location;
    }
  }
}
</script>

<style>

</style>