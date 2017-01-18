<template>
  <div id="app">
    <navigation></navigation>
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello.vue';
import Navigation from './components/navigation/Navigation.vue';

export default {
  name: 'app',
  components: {
    Hello, Navigation
  }
}
</script>