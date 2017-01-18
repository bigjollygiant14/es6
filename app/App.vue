<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import Navigation from './components/Navigation.vue'
import Account from './components/Account.vue'

export default {
  name: 'app',
  components: {
    Hello, Navigation, Account
  }
}
</script>