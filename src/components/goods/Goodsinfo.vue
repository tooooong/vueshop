<template>
  <div class="goods-info">
    <!-- lunbotu -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swipe :swipelist="lists"></swipe>
        </div>
      </div>
    </div>

    <!-- zhongjian  -->
    <div class="mui-card">
      <div class="mui-card-header">{{ goodsinfo.abstract}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：<del>￥{{ goodsinfo.old_price}}</del>&nbsp;&nbsp;
            销售价：<span class="now_price">￥{{ goodsinfo.new_price }}</span>
          </p>
          <p>购买数量：<numberbox
              @getcount="getSelectedCount"
              :sell="goodsinfo.sell"
            ></numberbox>
          </p>

          <p>
            <mt-button
              type='primary'
              size='small'
            >立即购买</mt-button>
            <mt-button
              type='danger'
              size='small'
              @click="addToShopcar"
            >加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!-- dibu -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{ goodsinfo.id }}</p>
          <p>库存情况：{{ goodsinfo.sell }}</p>
          <p>上架时间：{{ goodsinfo.time | dateFormat }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button
          type="primary"
          size="large"
          plain
          @click="goGoodsdetail(id)"
        >图文介绍</mt-button>
        <mt-button
          type="danger"
          size="large"
          plain
          @click="goGoodscomment(id)"
        >商品评论</mt-button>
      </div>
    </div>

    <!-- 购物车小球 -->
    <transition
      @before-enter="beforeEnter"
      @enter="Enter"
      @after-enter="afterEnter"
    >
      <div
        class="ball"
        v-show="ballflag"
        ref="ball"
      ></div>
    </transition>

  </div>
</template>

<script>
import swipe from '../comment/swipe'
import numberbox from '../comment/numberbox'

export default {
  data () {
    return {
      lists: [],
      goodsinfo: [],
      id: this.$route.params.id,
      ballflag: false,
      selectedCount: 1
    }
  },
  created () {
    this.getSwipe()
    this.getGoodsinfo()
  },
  methods: {
    getSwipe () {
      this.$http.get("api/swipe").then(result => {
        if (result.body.status === 0) {
          this.lists = result.body.swipe
        }
      })
    },

    getGoodsinfo () {
      this.$http.get("api/goodslist/").then(result => {
        if (result.body.status === 0) {
          this.goodsinfo = result.body.goodslist[this.id - 1]
        }
      })
    },

    goGoodsdetail (id) {
      this.$router.push({
        name: 'goodsdetail',
        params: id
      })
    },

    goGoodscomment (id) {
      this.$router.push({
        name: 'goodscomment',
        params: id
      })
    },

    // 添加到购物车
    addToShopcar () {
      this.ballflag = !this.ballflag
      let goods = {
        id: this.id,
        count: this.selectedCount,
        price: this.goodsinfo.new_price,
        title: this.goodsinfo.abstract,
        sell: this.goodsinfo.sell,
        img: this.goodsinfo.img,
        selected: true
      }
      this.$store.commit('addToCart', goods)
    },

    beforeEnter (el) {
      el.style.transform = 'translate(0, 0)'
    },
    Enter (el, done) {
      el.offsetWidth

      const ballPosition = this.$refs.ball.getBoundingClientRect()
      const badgePosition = document.getElementById('badge').getBoundingClientRect()

      const x = badgePosition.left - ballPosition.left
      const y = badgePosition.top - ballPosition.top

      el.style.transform = `translate(${x}px, ${y}px)`
      el.style.transition = 'all 0.5s cubic-bezier(.43,-0.36,1,.68)'
      done()
    },
    afterEnter () {
      this.ballflag = !this.ballflag
    },


    getSelectedCount (count) {
      this.selectedCount = count
    }
  },
  components: {
    swipe,
    numberbox
  }
}
</script>

<style scoped>
.goods-info {
  background-color: #eee;
  overflow: hidden;
}
.mui-card-content-inner {
  padding: 5px;
}
.now_price {
  font-size: 16px;
  font-weight: bold;
  color: red;
}
.mint-button {
  margin: 0px 2px;
}
.mui-card-footer {
  display: block;
}
.mint-button--large {
  margin: 15px 0;
}
.ball {
  width: 16px;
  height: 16px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  z-index: 99;
  top: 385px; /* 690 263*/
  left: 69px;
}
</style>
