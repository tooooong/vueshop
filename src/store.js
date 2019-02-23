import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var cart = JSON.parse(localStorage.getItem('cart')) || []

export default new Vuex.Store({
  state: {
    cart: cart // { id:商品id, count:商品数量, price:商品价格, title:标题, sell:库存, img:图片, selected: false }
  },
  mutations: {
    // 点击 加入购物车，把商品信息加入到state的cart中
    addToCart(state, goods) {
      // 如果已经在购物车中，就只更新数量
      let flag = false
      state.cart.some(item => {
        if (item.id == goods.id) {
          item.count += parseInt(goods.count)
          flag = true
          return true
        }
      })
      if (!flag) {
        state.cart.push(goods)
      }
      // 存储到 localstorage
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    updateCart(state, goods) {
      // 更新数字框到 cart
      state.cart.some(item => {
        if (item.id == goods.id) {
          item.count = parseInt(goods.num)
          return true
        }
      })
      // 存储到 localstorage
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    removeCart(state, id) {
      state.cart.some((item, i) => {
        if (item.id == id) {
          state.cart.splice(i, 1)
          return true
        }
      })
      // console.log('removeCart')
      // 存储到 localstorage
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    updateCartSelected(state, e) {
      state.cart.some(item => {
        if (item.id == e.id) {
          item.selected = e.selected
          return true
        }
      })
      // 存储到 localstorage
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  getters: {
    // 获取商品数量 以改变 badge 的值
    getAllCount(state) {
      var num = 0
      state.cart.forEach(item => {
        num += item.count
        if (item.selected == false) {
          num -= item.count
        }
      })
      return num
    },
    getTotal(state) {
      var total = {
        count: 0,
        amount: 0
      }
      state.cart.forEach(item => {
        if (item.selected) {
          total.count += item.count
          total.amount += item.price * item.count
        }
      })
      return total
    },

    getGoodsCount(state) {
      var o = {}
      state.cart.forEach(item => {
        o[item.id] = item.count
      })
      return o
    }
  }
})
