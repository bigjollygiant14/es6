<template lang="pug">
  div#navigation
    h4 {{message}} Bye
    div.nav-links
      router-link(:to="link.link" v-for="link in links") {{link.name}}
</template>

<script>
// import someOtherComponent from 'reference'

export default {
  name: 'navigation',
  data () {
    return {
      message: 'Navigation Component',
      links: [
        {
          name: 'Home',
          link: '/'
        }, {
          name: 'My Account',
          link: '/me'
        }, {
          name: 'Calendars',
          link: '/calendars'
        }
      ]
    }
  }/*,
  components: {
    someOtherComponent
  }*/
}
</script>

<style lang="stylus" scoped>
.nav-links a 
  color black
  text-decoration none
  padding 5px
</style>