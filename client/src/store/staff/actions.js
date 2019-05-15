import {addStaff} from '@/services/api'
export default {

    async add({commit}, payload){
        let data = await addStaff()
        if(data){
            if(payload.callback){
                payload.callback(data)
            }
        }
      }
    }