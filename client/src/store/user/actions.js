import {reqUser} from '@/services/api'
export default {

    async fetchUser(context){
        let data = await reqUser()
        console.log('data: ', data)
        context.commit('changeUser', data)
      }
    }
