<template>
  <div class="search">
    <div :class="searchBarFixed == true ? 'isFixed' :''">
      <input
        type="search"
        placeholder="搜索"
        id="search"
      >
      <input
        type="submit"
        value="搜索"
        id="submit"
      >
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchBarFixed: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      let scrollTop = document.documentElement.scrollTop
      // let offsetTop = document.querySelector('.search').offsetTop
      scrollTop >= 40 ? this.searchBarFixed = true : this.searchBarFixed = false
    },
  }
}
</script>

<style scoped>
.search {
  height: 1000px;
  margin-top: 1px;
}
#search {
  width: 300px;
  margin-bottom: 0;
}
#submit {
  height: 34px;
  width: 75px;
}
.isFixed {
  position: fixed;
}
</style>
