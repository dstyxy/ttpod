<template>
  <div class="control">
    <div class="btn-wrap">
      <span class="prev"></span>
      <span class="toggle"></span>
      <span class="next"></span>
      <span class="module"></span>
    </div>
    <div class="progress">
      <div class="box">
        <div class="base"></div>
        <div class="cur"></div>
        <div class="dot"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'control',
  props:[],
  data() {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
.control
  position absolute
  bottom 0
  left 0
  width 100%
  height 60px
  display flex
  .btn-wrap
    width 120px
    height 100%
    display flex
    justify-content space-between
    align-items center
    margin 0 10px
    &>span
      background-image url('~@/assets/images/player.png')
    .prev
      width 19px
      height 20px
      background-position 0 -30px
    .toggle
      width 19px
      height 29px
      background-position -30px 0
    .next
      width 19px
      height 20px
      background-position 0 -52px
    .module
      width 25px
      height 25px
      background-position 0 -173px
      background-size 450%
  .progress
    margin 0 10px
    width calc(100% - 120px - 20px - 20px)
    height 100%
    display flex
    justify-content space-around
    align-items center
    .box
      width 100%
      height 2px
      position relative
      .base,.cur
        position absolute
        top 0
        left 0
        width 100%
        height 100%
      .base
        background-color #808284
      .cur
        background-color #d8d8d8
      .dot
        width 10px
        height 10px
        border-radius 50%
        background-color #fff
        position absolute
        top -4px
        left 50% 

</style>


