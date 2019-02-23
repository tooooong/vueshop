<template>
  <div class="search">
    <div class="container">
      <input
        type="search"
        placeholder="搜索"
        id="search"
      >
      <input
        type="submit"
        value="搜索"
        id="submit"
      ></div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  }
}
</script>

<style scoped>
.search {
  height: 1000px;
  margin-top: 5px;
}
#search {
  width: 85%;
  margin-bottom: 0;
}
#submit {
  height: 34px;
  width: 15%;
}
</style>
