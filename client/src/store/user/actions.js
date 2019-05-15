import {reqUser} from '@/services/api'
export default {

    async fetchUser({commit}, payload){
        let data = await reqUser()
        console.log('data: ', data)
        commit('changeUser', data)
      }
    }
