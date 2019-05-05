import Vue from 'vue'

import Vuex from 'vuex'



Vue.use(Vuex)

let store = new Vuex.Store({
  state:{
    musicDetails:{
      info:null,
      show:false
    },
    search:false
  },
  mutations:{
    setMusicDetails(state,v) {
      state.musicDetails = v
    },
    setSearch(state,v) {
      state.search = v
    }
  }
})


export default store