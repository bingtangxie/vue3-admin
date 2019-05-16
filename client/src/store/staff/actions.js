import {addStaff} from '@/services/api'
export default {

    async add({commit}, payload){
       const params = payload.data
        let data = await addStaff(params)
        if(data){
            if(payload.callback){
                payload.callback(data)
            }
        }
      }
    }