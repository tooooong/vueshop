<template>
  <div class="goods-list">
    <!-- <router-link
      class="goods-item"
      v-for="(item, index) in list"
      :key="index"
      :to="'/home/goodsinfo/' + item.id"
      tag="div"
    >
      <img
        :src="item.img"
        alt=""
      >
      <h1 class="goods-title">{{ item.title }}</h1>
      <div class="goods-info">
        <p class="price">
          <span class="now">￥{{ item.new_price }}</span>
          <span class="old">￥{{ item.old_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>售出{{ item.sell }}件</span>
        </p>
      </div>
    </router-link> -->

    <div
      class="goods-item"
      v-for="(item, index) in list"
      :key="index"
      @click="goInfo(item.id)"
    >
      <img
        :src="item.img"
        alt=""
      >
      <h1 class="goods-title">{{ item.title }}</h1>
      <div class="goods-info">
        <p class="price">
          <span class="now">￥{{ item.new_price }}</span>
          <span class="old">￥{{ item.old_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>售出{{ item.sell }}件</span>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getGoodslist()
  },
  methods: {
    getGoodslist () {
      this.$http.get("api/goodslist").then(result => {
        if (result.body.status === 0) {
          this.list = result.body.goodslist
        }
      })
    },
    goInfo (id) {
      this.$router.push('/home/goodsinfo/' + id)
    }
  }
}
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
}
.goods-list .goods-item {
  width: 49%;
  border: 1px solid #ccc;
  box-shadow: 0 0 8px #ccc;
  margin: 3px 0;
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
}
.goods-list .goods-item img {
  width: 100%;
}
.goods-list .goods-item .goods-title {
  font-size: 14px;
}
.goods-list .goods-item .goods-info {
  background-color: #eee;
}
.goods-list .goods-item .goods-info p {
  margin: 0;
  padding: 5px;
}
.goods-list .goods-item .goods-info .sell {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
.goods-list .goods-item .goods-info .price .now {
  color: red;
  font-weight: bold;
  font-size: 16px;
}
.goods-list .goods-item .goods-info .price .old {
  text-decoration: line-through;
  font-size: 12px;
  margin-left: 10px;
}
</style>
