<template functional>
  <h3>Counter: {{props.count}}, {{props.doubleCount}}</h3>
</template>

<script>
export default {
  name: 'CounterDisplay',

  props: {
    count: {
      type: Number,
      default: 0
    },

    doubleCount: {
      type: Number,
      default: 0
    }
  },
}
</script>
