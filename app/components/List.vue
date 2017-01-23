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
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      tableHeaders: ['First Name', 'Last Name', 'Role', 'Contact'],
      tableData: [{
        fName: 'Peter',
        lName: 'Piper',
        role: 'Engineer',
        phone: '5555555555'
      }, {
        fName: 'Icarus',
        lName: 'Sol',
        role: 'Design',
        phone: '1234567890'
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