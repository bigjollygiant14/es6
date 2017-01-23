<template lang="pug">
  #app
    navigation
    router-view
</template>

<script>
import Hello from './components/Hello.vue'
import Navigation from './components/Navigation.vue'
import Account from './components/Account.vue'
import List from './components/List.vue'

export default {
  name: 'app',
  components: {
    Hello, Navigation, Account, List
  }
}
</script>

<style lang="stylus">
  /* Global Styles */
</style>