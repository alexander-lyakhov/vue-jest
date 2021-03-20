<script>
export default {
  name: 'Counter',

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
  },

  render(h) {
    return h('div', [
      this.$scopedSlots.default({
        count: this.count,
        doubleCount: this.doubleCount,
        increaseCounter: this.increaseCounter
      })
    ])
  }
}
</script>