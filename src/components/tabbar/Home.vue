<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe>
      <mt-swipe-item
        v-for="(item, index) in lists"
        :key="index"
      >
        <img
          :src="item.img"
          alt=""
        >
      </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img
            src="../../assets/images/2.png"
            alt=""
          >
          <div class="mui-media-body">新闻资讯</div>
        </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img
            src="../../assets/images/3.png"
            alt=""
          >
          <div class="mui-media-body">图片分享</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img
            src="../../assets/images/4.png"
            alt=""
          >
          <div class="mui-media-body">商品购买</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img
            src="../../assets/images/5.png"
            alt=""
          >
          <div class="mui-media-body">留言反馈</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img
            src="../../assets/images/6.png"
            alt=""
          >
          <div class="mui-media-body">视频专区</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img
            src="../../assets/images/1.png"
            alt=""
          >
          <div class="mui-media-body">联系我们</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-gear"></span>
          <div class="mui-media-body">Setting</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-info"></span>
          <div class="mui-media-body">about</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-more"></span>
          <div class="mui-media-body">more</div>
        </a></li>
    </ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  data () {
    return {
      lists: []
    }
  },
  created () {
    this.getSwipe()
  },
  methods: {
    getSwipe () {
      this.$http.get("api/swipe").then(result => {
        if (result.body.status === 0) {
          this.lists = result.body.swipe
        } else {
          Toast('加载轮播图失败！')
        }
      })
    }
  }
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
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
.mui-grid-view.mui-grid-9 img {
  height: 60px;
  width: 60px;
}
</style>
