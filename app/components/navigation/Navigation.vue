<template>
  <div id="navigation">
    <h4>{{message}}</h4>
    <div class="nav-links">
      <router-link :to="link.link" v-for="link in links">{{link.name}}</router-link>
    </div>
  </div>
</template>
<!--<template lang="jade">
  div#navigation
    h4 {{message}} Hi
    div.nav-links
      router-link(:to="link.link" v-for="link in links") {{link.name}}
</template>-->

<script>
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
  }
}
</script>

<!-- <style scoped>
  .nav-links a {
    color: black;
    text-decoration: none;
    padding: 5px;
  }
</style> -->
<style lang="stylus" scoped>
.nav-links a 
  color black
  text-decoration none
  padding 5px
</style>