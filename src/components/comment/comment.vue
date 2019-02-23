<template>
  <div class="comment-container">
    <h3>发表评论</h3>
    <hr>
    <textarea
      placeholder="请输入评论内容（最多120字）"
      maxlength="120"
      cols="30"
      rows="5"
      v-model="msg"
    ></textarea>

    <mt-button
      type="primary"
      size="large"
      @click="postComment"
    >发表评论</mt-button>

    <div class="comment-list">
      <div
        class="comment-item"
        v-for="(item, index) in comments"
        :key="index"
      >
        <div class="comment-title">
          第{{ index + 1 }}楼&nbsp;&nbsp;用户：{{ item.username }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}
        </div>
        <div class="comment-body">
          {{ item.content }}
        </div>
      </div>
    </div>

    <mt-button
      type="danger"
      size="large"
    >加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import moment from 'moment'

export default {
  name: '',
  data () {
    return {
      comments: [],
      msg: '',
    }
  },
  created () {
    this.getComment()
  },
  methods: {
    getComment () {
      this.$http.get("api/comment").then(result => {
        if (result.body.status === 0) {
          this.comments = result.body.comment
        } else {
          Toast('获取评论失败！')
        }
      })
    },
    postComment () {
      if (this.msg.trim().length === 0) {
        return Toast('评论内容不能为空！')
      }
      let cmt = {
        username: '匿名用户',
        add_time: moment(Date.now()).format(),
        content: this.msg.trim()
      }

      this.$http.post("api/comment", cmt).then(result => {
        if (result.body.status === 0) {
          this.getComment()
          this.msg = ''
        } else {
          Toast('获取评论失败！')
        }
      })
    }
  }
}
</script>

<style scoped>
.comment-container h3 {
  font-size: 16px;
}
.comment-container textarea {
  font-size: 14px;
  margin: 0;
}
.comment-list {
  margin: 5px 0;
}
.comment-list .comment-item {
  font-size: 12px;
}
.comment-list .comment-item .comment-title {
  padding: 0 10px;
  line-height: 30px;
  background-color: #ccc;
  border-radius: 5px;
}
.comment-list .comment-item .comment-body {
  font-size: 14px;
  line-height: 35px;
  text-indent: 2em;
}
</style>
