<template>
  <div class="main">
    <nav-top></nav-top>
    <music-list></music-list>
    <control></control>
    <music-details></music-details>
  </div>
</template>

<script>
import navTop from '@/components/navTop.vue'
import control from '@/components/control.vue'
import musicList from '@/components/musicList.vue'
import musicDetails from '@/components/musicDetails.vue'

export default {
  name: 'Main',
  props: [],
  components:{
    navTop,
    control,
    musicList,
    musicDetails
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
