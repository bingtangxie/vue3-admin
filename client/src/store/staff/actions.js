import {addStaff} from '@/services/api'
import { getStaff } from '../../services/api';
import {delStaff} from '../../services/api'
import {getOne} from '../../services/api'
import {edit} from '../../services/api'

export default {
    async add({commit}, payload){
       const params = payload.data
        let data = await addStaff(params)
        if(data){
            if(payload.callback){
                payload.callback(data)
            }
        }
      },
    async get({commit}, payload){
        if(payload){
            let data = await getStaff(payload)
            // console.log('starff_get_data: ', data)
            if(data){
                console.log(data)
                commit('saveStaffList', data.staffList)
                commit('savePagination', data.pagination)
            }
        }else{
            let data = await getStaff()
            // console.log('starff_get_data: ', data)
            if(data){
                console.log(data)
                commit('saveStaffList', data.staffList)
                commit('savePagination', data.pagination)
            }
        }
    },
    async delete({commit}, payload){
        let data = await delStaff(payload)
        if(data){
            if(payload.callback){
                payload.callback(data)
            }
        }
    },
    async getOne({commit}, payload){
        const { id } = payload
        let data = await getOne(id)
        if(data){
            if(payload.callback){
                payload.callback(data)
            }
        }
    },
    async edit({commit}, payload){
        const { data } = payload
        let result = await edit(data)
        if(result){
            if(payload.callback){
                payload.callback(result)
            }
        }
    }
}