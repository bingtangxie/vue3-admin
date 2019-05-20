import {reqUser} from '@/services/api'
import {RegisterUser} from '@/services/api'
import {LoginUser} from '@/services/api'

export default {

    async fetchUser({commit}, payload){
        let data = await reqUser()
        // console.log('data: ', data)
        commit('changeUser', data)
      },
    async saveRegisterUser({commit}, payload){
        // console.log("payload: ", payload)
        let data = await RegisterUser(payload.data)
        // commit('changeRegisterUser', data)
        if(data){
            if (payload.callback){
                payload.callback(data)
            }
        }
    },
    async saveLoginUser({commit}, payload){
        let data = await LoginUser(payload.data)
        if (data){
            console.log(data)
            if (payload.callback){
                payload.callback(data)
            }
        }
    },
}
