<template>
  <div id="navigation">
    <ul>
      <li v-for="link in links"><a :href="link.link">{{link.name}}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      message: 'Welcome to Your Vue.js App',
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

<style scoped>
  a {
    color: black;
  }
</style>