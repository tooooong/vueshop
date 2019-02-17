import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入 mui
import './lib/mui/dist/css/mui.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
