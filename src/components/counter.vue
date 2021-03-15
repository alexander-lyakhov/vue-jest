<template>
  <div class="counter">
    <div class="counter-value">{{ count }}</div>
    <a class="btn btn-increase blue darken-2" href="#" @click.prevent="increase">Increase +</a>
    <a class="btn btn-decrease blue darken-2" href="#" @click.prevent="decrease">Decrease -</a>
    <a class="btn btn-reset black-text deep-orange lighten-3" href="#" @click.prevent="reset">Reset</a>
  </div>
</template>

<script>
export default {
  name: "counter",

  data() {
    return {
      count: 0
    };
  },

  methods: {
    increase() {
      ++this.count;
    },

    decrease() {
      --this.count;
    },

    reset() {
      this.count = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.counter {
  text-align: center;
  width: 256px;
  margin: 8px auto;

  &-value {
    background: #303030;
    border: 1px solid #808080;
    border-radius: 4px;
    width: 100%;
    height: 32px;
    line-height: 32px;
    margin: 5px 0;
  }

  .btn {
    width: 100%;
    margin: 1px 0;
  }
}
</style>
