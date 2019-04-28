<template>
  <div class="music-list">
    <div class="box">
      <div class="header">
        <span class="id"></span>
        <span class="name">歌曲</span>
        <span class="author">歌手</span>
        <span class="control"></span>
      </div>
      <div class="item" :class="{active:index === 2}" v-for="(item,index) of 30" :key="index">
        <span class="id">{{index}}</span>
        <span class="name">歌曲asdsdasd</span>
        <span class="author">歌as手</span>
        <span class="control">...</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'musicList',
  data() {
    return {
      musicList:[
        {
          name:'aksjhdkjash',
          author:'askdj',
          src:''
        }
      ]
    }
  }
}
</script>


<style lang="stylus" scoped>
.music-list
  position absolute
  top 35px
  width 100%
  bottom 60px
  padding 15px 10px
  .box
    height 100%
    overflow-y auto
    color rgba(225,225,225,0.8) 
    padding 0 10px
    .header,.item
      display flex
      justify-content space-between
      align-items center
      height 50px
      border-bottom 1px solid rgba(150,150,150,0.1)
      .id
        width 10%
      .control
        width 5%
      .name
        width 65%
      .author
        width 20%
    .active
      color #fff
</style>


