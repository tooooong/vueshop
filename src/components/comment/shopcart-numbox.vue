<template>
  <div>
    <div class="mui-numbox" style="width: 150px;height: 20px">
      <button
        class="mui-btn mui-btn-numbox-minus"
        type="button"
        @click="subtract"
      >-</button>
      <input
        id="test"
        class="mui-input-numbox"
        type="number"
        :value="initcount"
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
      count: this.initcount
    }
  },
  methods: {
    subtract () {
      if (this.count >= 2) {
        this.count--
      } else {
        this.count = 1
      }
      // this.$emit('getcount', this.count)
      this.$store.commit('updateCart',{
        id: this.id,
        num: this.count
      })
    },
    add () {
      if (this.count >= this.sell) {
        this.count = this.sell - 1
      }
      this.count++
      this.$store.commit('updateCart',{
        id: this.id,
        num: this.count
      })
      // this.$emit('getcount', this.count)
    },
    countChange () {
      if (this.count >= this.sell) {
        this.count = this.sell
      }
      this.$store.commit('updateCart',{
        id: this.id,
        num: this.count
      })
      // this.$emit('getcount', this.count)
    }
  },
  props: [
    'goodscount',
    'sell',
    'id',
    'initcount'
  ]
}
</script>

<style scoped>
</style>
