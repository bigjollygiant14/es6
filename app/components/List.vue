<template lang="pug">
  #list
    h1 {{ tableTitle }}
    table
      thead
        tr
          th(v-for="header in tableHeaders") {{ header }}
      tbody
        tr(v-for="user in tableData")
          td {{ user.fName }}
          td {{ user.lName }}
          td {{ user.role }}
          td {{ user.phone }}
          td {{ user.email }}
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      tableHeaders: ['First Name', 'Last Name', 'Role', 'Phone', 'Email'],
      tableData: [{
        fName: 'Peter',
        lName: 'Piper',
        role: 'Engineer',
        phone: '5555555555',
        email: 'p.piper@gmail.com'
      }, {
        fName: 'Icarus',
        lName: 'Sol',
        role: 'Design',
        phone: '1234567890',
        email: 'i.sol@gmail.com'
      }]
    }
  },
  props: {
    tableTitle: {
      type: String,
      default: 'My Table',
      required: false
    }
  },
  created () {
  },
  beforeUpdate () {
  },
  methods: {
    /* updateCount: function () {
      let vm = this
      vm.count += 1
    } */
  }
}
</script>

<style lang="stylus" scoped>
  @import '../styles/vars.styl'

  h1
    color $main-color
</style>