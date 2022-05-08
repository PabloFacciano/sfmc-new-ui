<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <div class="navbar-nav">
          <AppNavbarLink v-for="l in navbar" :key="l?.to" :config="l" :to="l.to"/>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import AppNavbarLink from './AppNavbarLink.vue'
export default {
  components: { AppNavbarLink },
  data(){
    return {
      navbar: [
        {
          label: 'Home',
          to: '/',
          children: []
        },
        {
          label: 'Audience',
          to: '/audience',
          children: [
            {
              label: 'Contacts',
              to: '/contacts',
              children: [
                {
                  label: 'List',
                  to: '/',
                  children: []
                },
                {
                  label: 'All Contacts',
                  to: '/allcontacts',
                  children: []
                },
                {
                  label: 'Mobile Lists',
                  to: '/mobilelists',
                  children: []
                },
                {
                  label: 'Favorites',
                  to: '/favorites',
                  children: []
                }
              ]
            },
            {
              label: 'Data Extensions',
              to: '/dataextensions',
              children: [
                {
                  label: 'List',
                  to: '',
                  children: []
                },
                {
                  label: 'Shared Data Extensions',
                  to: '/shareddataextensions',
                  children: []
                }
              ]
            },
            {
              label: 'Data Views',
              to: '/dataviews',
              children: [

              ]
            },
            {
              label: 'Subscription',
              to: '/subscription',
              children: [

              ]
            },
            {
              label: 'Classic',
              to: '/classic',
              children: [

              ]
            }
          ]
        },
        {
          label: 'Automation',
          to: '/automation',
          children: [

          ]
        },
        {
          label: 'About',
          to: '/about',
          children: []
        }
      ]
    }
  }
}
</script>

<style>

</style>