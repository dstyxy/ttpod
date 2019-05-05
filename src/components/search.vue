<template>
  <div class="search" @click.self="closeSearch()">
    <div class="box">
      <div class="input-wrap">
        <input type="text" placeholder="输入歌名点搜索">
        <span>搜索</span>
      </div>
      <div class="close-btn" @click="closeSearch()">X</div>
      <div class="origin-list"> 
        <div>
          <input type="radio" id="0" value="0" v-model="originType">
          <label for="0">网易云</label>
        </div>
        <div>
          <input type="radio" id="1" value="1" v-model="originType">
          <label for="1">qq</label>
        </div>
        <div>
          <input type="radio" id="2" value="2" v-model="originType">
          <label for="2">虾米</label>
        </div>
        <div>
          <input type="radio" id="3" value="3" v-model="originType">
          <label for="3">酷狗</label>
        </div>
        <div>
          <input type="radio" id="4" value="4" v-model="originType">
          <label for="4">百度</label>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'search',
  data() {
    return {
      originType:0
    }
  },
  computed:{
    searchShow() {
      return this.$store.state.search
    }
  },
  methods:{
    closeSearch() {
      this.$store.commit('setSearch',false)
    }
  }
}
</script>


<style lang="stylus" scoped>
.search
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  background-color rgba(0,0,0,0.25)
  display flex
  justify-content space-around
  align-items center
  .box
    position relative
    width 90%
    background-color #fff
    border-radius 6px
    padding 40px 15px 25px
    .input-wrap
      width 100%
      margin-bottom 10px
      overflow hidden
      input
        display block
        float left
        width 80%
        height 30px
        border 0
        outline 0
        padding 0 15px
        border 1px solid #a7a1a1
      span
        display block
        float right
        border 1px solid #a7a1a1
        height 30px
        line-height 30px
        width 20%
        background-color #eee
        text-align center
    .origin-list
      &>div
        float left
        display flex
        align-items center
        margin-right 10px
        &>input
          margin-right 5px
    .close-btn
      position absolute
      top 0
      right 0
      width 30px
      height 30px
      text-align center
      line-height 30px
      border-radius 50%
</style>


