<template functional>
  <button class="btn blue" @click.prevent="listeners.increase">Increase counter</button>
</template>

<script>
export default {
  name: 'CounterButton',
}
</script>

<style lang="scss" scoped>
</style>