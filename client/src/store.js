import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
    fetchUser(context){
      axios.get("/api/users").then((response) => {
        context.commit('changeUser', response.data)
    })
    .catch((error) => {
        console.log(error)
    })
    }
  }
})
