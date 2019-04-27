<template>
  <div class="main">
    <nav-top></nav-top>
    <control></control>
  </div>
</template>

<script>
import navTop from '@/components/NavTop.vue'
import control from '@/components/Control.vue'

export default {
  name: 'Main',
  props: [],
  components:{
    navTop,
    control
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
