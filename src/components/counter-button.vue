<template>
  <button class="btn blue" @click.prevent="increase">Increase counter</button>
</template>

<script>
export default {
  name: 'CounterButton',

  methods: {
    increase() {
      this.$emit('increase');
    }
  }
}
</script>

<style lang="scss" scoped>
</style>