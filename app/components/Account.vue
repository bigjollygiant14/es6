<template lang="pug">
  #account
    h1 {{ message }}
    button(v-on:click="updateCount()") Click me to increment by one
    div {{ count }}
</template>

<script>
// import userFactory from '../shared/user.factory.js'

export default {
  name: 'account',
  data () {
    return {
      message: 'My Account',
      count: 0
    }
  },
  created () {
    console.log('More Event Hooks Here: ' + 'https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram')
  },
  beforeUpdate () {
    console.log('before update')
  },
  methods: {
    // updateCount: function () {
    updateCount: function () {
      let vm = this
      vm.count += 1
    }
  }
}
</script>

<style lang="stylus" scoped></style>