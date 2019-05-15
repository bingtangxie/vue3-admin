import Vue from 'vue'
import Vuex from 'vuex'
import {reqUser} from '@/services/api'

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
   async fetchUser(context){
    //   axios.get("/api/users").then((response) => {
    //     context.commit('changeUser', response.data)
    // })
    // .catch((error) => {
    //     console.log(error)
    // })
      let data = await reqUser()
      console.log('data: ', data)
      context.commit('changeUser', data)
    }
  }
})
