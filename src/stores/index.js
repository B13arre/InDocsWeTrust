import Vue from 'vue'
import Vuex from 'vuex'
import uix from './modules/uix'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    uix
  }
})
