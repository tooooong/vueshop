<template>
  <div>
    <div class="nav">
      <mt-button
        class="button"
        :type="this.active === 'tab-container1' ? 'primary' : 'default'"
        @click.native="active = 'tab-container1' "
      >风景</mt-button>
      <mt-button
        class="button"
        :type="this.active === 'tab-container2' ? 'primary' : 'default'"
        @click.native="active = 'tab-container2' "
      >美女</mt-button>
      <mt-button
        class="button"
        :type="this.active === 'tab-container3' ? 'primary' : 'default'"
        @click.native="active = 'tab-container3' "
      >动漫</mt-button>
    </div>

    <!-- container -->
    <mt-tab-container
      v-model="active"
      swipeable
    >
      <mt-tab-container-item id="tab-container1">
        <ul class="photo-list">
          <router-link
            v-for="(item, index) in photolists"
            :key="index"
            tag="li"
            :to="'/home/photoinfo/'+ item.id"
          >
            <img v-lazy="item.img">
            <div class="info">
              <h1 class="info-title">{{ item.title }}</h1>
              <div class="info-abstract">{{ item.abstract }}</div>
            </div>
          </router-link>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">
        <ul class="photo-list">
          <li
            v-for="(item, index) in photolists"
            :key="index"
          >
            <img v-lazy="item.img1">
            <div class="info">
              <h1 class="info-title">{{ item.title1 }}</h1>
              <div class="info-abstract">{{ item.abstract1 }}</div>
            </div>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container3">
        <ul class="photo-list">
          <li
            v-for="(item, index) in photolists"
            :key="index"
          >
            <img v-lazy="item.img2">
            <div class="info">
              <h1 class="info-title">{{ item.title2 }}</h1>
              <div class="info-abstract">{{ item.abstract2 }}</div>
            </div>
          </li>
        </ul>
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      active: 'tab-container1',
      photolists: []
    }
  },
  created () {
    this.getPhotoById()
  },
  methods: {
    getPhotoById () {
      this.$http.get("api/photo").then(result => {
        if (result.body.status === 0) {
          this.photolists = result.body.photo
        }
      })
    }
  }
}
</script>

<style scoped>
.nav {
  /* background-color: #ccc; */
  height: 45px;
  display: flex;
  justify-content: space-around;
}
.button {
  margin: 5px 2px;
  width: 120px;
  height: 35px;
}
.photo-list {
  list-style: none;
  margin: 0;
  padding: 0 10px;
  padding-bottom: 0;
}
.photo-list li {
  background-color: #ccc;
  text-align: center;
  margin-bottom: 10px;
  box-shadow: 0 0 9px #999;
  border-radius: 10px;
  position: relative;
}
.photo-list li img {
  width: 100%;
  vertical-align: middle;
  border-radius: 10px;
}
.photo-list li img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}

.info {
  color: white;
  text-align: left;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  max-height: 85px;
  border-radius: 10px;
}
.info .info-title {
  margin: 5px 5px;
  font-size: 14px;
}
.info .info-abstract {
  margin: 5px 5px;
  font-size: 13px;
}
</style>
