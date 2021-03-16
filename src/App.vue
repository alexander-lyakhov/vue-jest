<template>
  <div id="app">
  </div>
</template>

<script>
import step from "./components/step-one.vue";

export default {
  name: "App",

  components: {
    step
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
