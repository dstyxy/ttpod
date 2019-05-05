<template>
  <div class="nav">
    <div class="nav-item">播放器</div>
    <div class="nav-item">播放列表</div>
    <div class="nav-item">歌单</div>
    <div class="nav-item" @click="search()">搜索</div>
  </div>
</template>

<script>
export default {
  name:'navTop',
  props:[],
  data() {
    return {
      navList:[
        {
          name:'播放器'
        },
        {
          name:'播放列表'
        },
        {
          name:'歌单'
        },
        {
          name:'搜索'
        }
      ]
    }
  },
  methods:{
    search() {
      this.$store.commit('setSearch',true)
    }
  }
}
</script>

<style lang="stylus" scoped>
.nav
  position absolute
  top 0
  left 0
  width 100%
  height 35px
  background-color rgba(0,0,0,0.12)
  display flex
  .nav-item
    width 25%
    text-align center
    line-height 35px
    color #C5C5C5
</style>
