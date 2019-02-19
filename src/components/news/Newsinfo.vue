<template>
  <div class="newsinfo">
    <h1 class="title">{{ newsinfo.title }}</h1>
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | dateFormat}}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>
    <hr>
    <div class="content" v-html="newsinfo.content"></div>
    <comment-box></comment-box>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import comment from '../comment/comment'

export default {
  name: '',
  data () {
    return {
      id: this.$route.params.id,
      newsinfo: []
    }
  },
  created () {
    this.getNewsinfo()
  },
  methods: {
    getNewsinfo () {
      this.$http.get("api/newslist").then(result => {
        if (result.body.status === 0) {
          this.newsinfo = result.body.newslist[this.id - 1]
        } else {
          Toast('获取新闻列表失败！')
        }
      })
    }
  },
  components: {
    'comment-box': comment
  }
}
</script>

<style>
.newsinfo {
  padding: 0 10px;
}
.newsinfo .title {
  font-size: 16px;
  text-align: center;
  margin: 15px 0;
  color: red;
  line-height: 20px;
}
/* .newsinfo h1 {
  margin: 10px;
} */
.newsinfo .subtitle {
  font-size: 13px;
  display: flex;
  justify-content: space-around;
}
</style>
