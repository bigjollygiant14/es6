<template>
  <div id="account">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'account',
  data () {
    return {
      message: 'My Account'
    }
  },
  methods () {
    return {
      init: () => {
        alert('poo')
      },
      dance: (input) => {
        alert(input)
      }
    }
  }
}
</script>

<style scoped></style>