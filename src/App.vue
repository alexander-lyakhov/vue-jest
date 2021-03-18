<template>
  <div id="app">
    <counter-display :count="count" :doubleCount="doubleCount" />
    <counter-button @increase="increaseCounter" />
  </div>
</template>

<script>
import counterDisplay from '@/components/counter-display.vue'
import counterButton from '@/components/counter-button.vue'

export default {
  name: "App",

  components: {
    counterDisplay,
    counterButton
  },

  data() {
    return {
      count: 0
    }
  },

  computed: {
    doubleCount() {
      return this.count * 2;
    }
  },

  methods: {
    increaseCounter() {
      this.count++;
    }
  }
};
</script>

<style lang="scss">
body {
  font: 16px verdana;
  color: #e0e0e0;
  background: #404040;
  padding: 16px;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
