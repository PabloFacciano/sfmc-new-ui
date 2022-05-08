<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <div class="navbar-nav">
          <router-link class="nav-link rounded ms-2" to="/">Home</router-link>
          <router-link class="nav-link rounded ms-2" to="/audience">Audience</router-link>
          <router-link class="nav-link rounded ms-2" to="/automation">Automation</router-link>
          <router-link class="nav-link rounded ms-2" to="/about">About</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>