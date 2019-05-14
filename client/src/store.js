import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    changeUser(state, data){
      state.user = data
    }
  },
  getters: {
    user: state => {
      return state.user
    }
  },
  actions: {

  }
})
