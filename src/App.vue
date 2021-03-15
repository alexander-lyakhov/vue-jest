<template>
  <div id="app">
    <counter />
  </div>
</template>

<script>
import counter from "./components/counter.vue";

export default {
  name: "App",

  components: {
    counter
  }
};
</script>

<style lang="scss">
body {
  font: 16px verdana;
  color: #e0e0e0;
  background: #404040;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
