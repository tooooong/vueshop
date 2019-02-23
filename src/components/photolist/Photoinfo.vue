<template>
  <div class="photoinfo">
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ this.date | dateFormat }}</span>
      <span>点击：{{ photoinfo.id }}次</span>
    </p>

    <hr>

    <vue-preview
      :list="list"
      :thumbImageStyle="{width: '80px', height: '80px', margin: '10px'}"
      :previewBoxStyle="{border: '1px solid #eee'}"
      :tapToClose="true"
    />

    <div class="content">
      {{ photoinfo.abstract }}
    </div>

    <cmt-box></cmt-box>
  </div>
</template>

<script>
import comment from '../comment/comment'

export default {
  name: '',
  data () {
    return {
      id: this.$route.params.id,
      date: '2019-02-21T07:54:47.718Z',
      photoinfo: [],
      list: [
        {
          src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3777236766,2257102621&fm=26&gp=0.jpg',
          w: 600,
          h: 600
        },
        {
          src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3884265536,2336454088&fm=26&gp=0.jpg',
          w: 600,
          h: 600
        }
      ]
    }
  },
  created () {
    this.getPhotoInfo()
  },
  methods: {
    getPhotoInfo () {
      this.$http.get("api/photo").then(result => {
        if (result.body.status === 0) {
          this.photoinfo = result.body.photo[this.id - 1]
        }
      })
    }
  },
  components: {
    'cmt-box': comment
  }
}
</script>

<style scoped>
.photoinfo {
  padding: 5px;
}
.photoinfo h3 {
  margin: 15px 0;
  color: blue;
  text-align: center;
}
.photoinfo .subtitle {
  display: flex;
  justify-content: space-between;
}
.photoinfo .content {
  font-size: 14px;
  line-height: 30px;
}
</style>
