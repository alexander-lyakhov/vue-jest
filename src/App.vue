<template>
  <div id="app">
    <counter #default="{count, doubleCount, increaseCounter}">
      <counter-display :count="count" :doubleCount="doubleCount" />
      <counter-button @increase="increaseCounter" />
    </counter>
  </div>
</template>

<script>
import counter from '@/components/counter.vue'
import counterDisplay from '@/components/counter-display.vue'
import counterButton from '@/components/counter-button.vue'

export default {
  name: "App",

  components: {
    counter,
    counterDisplay,
    counterButton
  },
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
