<template>
  <div class="nav">
    <div class="nav-item" v-for="item of navList" :key="item.name">{{item.name}}</div>
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
