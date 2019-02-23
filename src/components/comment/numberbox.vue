<template>
  <div>
    <div class="mui-numbox" style="width: 200px;">
      <button
        class="mui-btn mui-btn-numbox-minus"
        type="button"
        @click="subtract"
      >-</button>
      <input
        id="test"
        class="mui-input-numbox"
        type="number"
        v-model="count"
        ref="num"
        @change="countChange"
      />
      <button
        class="mui-btn mui-btn-numbox-plus"
        type="button"
        @click="add"
      >+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      count: 1
    }
  },
  methods: {
    subtract () {
      if (this.count >= 2) {
        this.count--
      } else {
        this.count = 1
      }
      this.$emit('getcount', this.count)
    },
    add () {
      if (this.count >= this.sell) {
        this.count = this.sell - 1
      }
      this.count++
      this.$emit('getcount', this.count)
    },
    countChange () {
      if (this.count >= this.sell) {
        this.count = this.sell
      }
      // console.log(this.count);
      // console.log(this.$refs.num)
      // this.$emit('getcount', this.$refs.num.value)
      this.$emit('getcount', this.count)
    }
  },
  props: [
    'sell'
  ]
}
</script>

<style scoped>
</style>
