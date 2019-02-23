<template>
  <div>
    <h3 class="title">{{ goodsdetail.abstract }}</h3>
    <hr>
    <img :src="goodsdetail.img" alt="">
    <div class="content">
      <p>{{ goodsdetail.time | dateFormat }}</p>
      {{ goodsdetail.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      goodsdetail: [],
      id: this.$route.params.id
    }
  },
  created() {
    this.getGoodsdetail()
  },
  methods: {
    getGoodsdetail () {
      this.$http.get("api/goodslist/").then(result => {
        if (result.body.status === 0) {
          this.goodsdetail = result.body.goodslist[this.id - 1]
        }
      })
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 16px;
  color: blueviolet;
  margin: 15px 0;
  text-align: center;
}
</style>
