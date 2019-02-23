<template>
  <div>
    <div class="goods-list">
      <!-- 购物车为空 -->
      <div
        class="mui-card"
        v-show="this.shopcart == ![]"
      >
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p>购物车为空</p>
          </div>
        </div>
      </div>

      <!-- 购物车不为空 -->
      <div
        class="mui-card"
        v-for="(item, index) in shopcart"
        :key="index"
      >
        <div class="mui-card-content">
          <div class="mui-card-content-inner flex">
            <mt-switch
              v-model="item.selected"
              @change="selectedChange(item.id, item.selected)"
            ></mt-switch>

            <img
              :src="item.img"
              alt=""
            >

            <div class="info">
              <div class="top">
                <h1>{{ item.title }}</h1>
                <span class="price">￥{{ item.price }}</span>
              </div>
              <p>
                <numbox
                  :initcount="$store.getters.getGoodsCount[item.id]"
                  :sell="item.sell"
                  :id="item.id"
                ></numbox>
                <a
                  href="#"
                  @click.prevent="remove(item.id, index)"
                >删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 结算 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner clearing">
          <div class="left">
            <p>总计（不包括运费）</p>
            <p>已勾选商品 <span class="red">{{ $store.getters.getTotal.count }}</span> 件，总价 ￥<span class="red">{{ $store.getters.getTotal.amount }}</span> 元</p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from '../comment/shopcart-numbox'

// var cart = JSON.parse(localStorage.getItem('cart'))
export default {
  name: '',
  data () {
    return {
      shopcart: JSON.parse(localStorage.getItem('cart'))
    }
  },
  methods: {
    remove (id, index) {
      this.shopcart.splice(index, 1)
      // console.log('remove');
      // localStorage.setItem('cart', JSON.stringify(this.shopcart))
      this.$store.commit('removeCart', id)
    },
    selectedChange (id, value) {
      this.$store.commit('updateCartSelected', {
        id,
        selected: value
      })
    }
  },
  components: {
    numbox
  }
}
</script>

<style scoped>
.goods-list img {
  width: 20%;
  height: 20%;
  margin: 0 3px;
}
.goods-list h1 {
  font-size: 14px;
}
.goods-list .price {
  color: red;
  font-weight: bold;
  margin-right: 2px;
}
.goods-list .info {
  width: 55%;
}
.goods-list a {
  margin-left: 2px;
}
.goods-list .flex {
  padding: 5px;
  display: flex;
  align-items: center;
}
.goods-list p {
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
}
.goods-list .top {
  display: flex;
  justify-content: space-between;
}

/* clearing */
.mui-card .clearing {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mui-card .red {
  color: red;
  font-weight: bold;
  font-size: 16px;
}
</style>
