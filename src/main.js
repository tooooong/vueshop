import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueResource from 'vue-resource'
Vue.use(VueResource)

// 引入 mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 引入 mint-ui
import 'mint-ui/lib/style.min.css'
import Mint from 'mint-ui'
Vue.use(Mint)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
