<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light py-0">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <div class="navbar-nav">
          <AppNavbarItem v-for="l in navbar" :key="l?.to" :config="{ config: l, to: l.to, type: l.type}" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import AppNavbarItem from './AppNavbarItem.vue'
export default {
  components: { AppNavbarItem },
  data(){
    return {
      navbar: [
        {
          label: 'Home',
          to: '/',
          children: [],
          type: 'link'
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
                  children: [],
                  type: 'link'
                },
                {
                  label: 'All Contacts',
                  to: '/allcontacts',
                  children: [],
                  type: 'link'
                },
                {
                  label: 'Mobile Lists',
                  to: '/mobilelists',
                  children: [],
                  type: 'link'
                },
                {
                  label: 'Favorites',
                  to: '/favorites',
                  children: [],
                  type: 'link'
                }
              ],
              type: 'link'
            },
            {
              label: 'Data Extensions',
              to: '/dataextensions',
              children: [
                {
                  label: 'List',
                  to: '',
                  children: [],
                  type: 'link'
                },
                {
                  label: 'Shared Data Extensions',
                  to: '/shareddataextensions',
                  children: [],
                  type: 'link'
                }
              ],
              type: 'link'
            },
            {
              label: 'Data Views',
              to: '/dataviews',
              children: [

              ],
              type: 'link'
            },
            {
              label: 'Subscription',
              to: '/subscription',
              children: [

              ],
              type: 'link'
            },
            {
              type: 'separator'
            },
            {
              label: 'Classic',
              to: '/classic',
              children: [

              ],
              type: 'link'
            }
          ],
          type: 'link'
        },
        {
          label: 'Automation',
          to: '/automation',
          children: [],
          type: 'link'
        },
        {
          label: 'About',
          to: '/about',
          children: [],
          type: 'link'
        }
      ]
    }
  }
}
</script>

<style>

</style>