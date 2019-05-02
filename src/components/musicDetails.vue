<template>
  <div class="details" v-if="musicDetails.show">
    <div class="name">
      <span>歌名：</span>
      <span></span>
    </div>
    <div class="author">
      <span>歌手：</span>
      <span></span>
    </div>
    <div class="album">
      <span>专辑：</span>
      <span></span>
    </div>
    <div class="action">
      <span>操作：</span>
      <span class="download">下载</span>
      <span class="link">外链</span>
    </div>
    <div class="close-btn" @click="closeDetails()">X</div>
  </div>
</template>


<script>
export default {
  name:'musicDetails',
  data() {
    return {

    }
  },
  computed:{
    musicDetails() {
      return this.$store.state.musicDetails
    }
  },
  methods:{
    closeDetails() {
      this.$store.commit('setMusicDetails', {
        show:false,
        info:null
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.details
  position absolute
  top 50%
  left 50%
  transform translate(-50%,-50%)
  width 80%
  padding 20px 30px
  border-radius 6px
  background-color #fff
  &>div
    line-height 1.5
    &>span:nth-of-type(1)
      color #B2AFAF
  .action
    .download,.link
      color #31c27c
      margin-right 20px
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

