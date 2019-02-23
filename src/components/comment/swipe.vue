<template>
  <div>
    <mt-swipe>
      <mt-swipe-item
        v-for="(item, index) in swipelist"
        :key="index"
      >
        <img
          :src="item.img"
          alt=""
        >
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  },
  props:['swipelist']
}
</script>

<style scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe-item {
  background-color: red;
}
img {
  width: 100%;
  height: 100%;
}
</style>
