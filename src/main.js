import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://127.0.0.1:3002'
Vue.http.options.emulateJSON = true

// 引入 mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 引入 mint-ui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.min.css'
Vue.use(Mint)

// import { Swipe, SwipeItem, Button } from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);

Vue.config.productionTip = false

import moment from 'moment'
// 定义全局过滤器
Vue.filter('dateFormat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

// 缩略图
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
