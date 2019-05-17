// import axios from 'axios'
import request from '@/utils/request'
export async function reqUser(){
    // return new Promise((resolve, reject) => {
    //    axios.get('/api/users').then((response)=>{
    //        console.log('response', response)
    //        resolve(response.data)
    //    }).catch((error)=>{
    //        reject(error)
    //    })
    // })
    return request('/api/users')
}
export async function addStaff(params){
    return request('/api/staff/add', {
        method: 'POST',
        data: {...params}
    })
}

export async function getStaff(params){
    if (params){
        let start = params.start || ''
        let end = params.end || ''
        return request(`/api/staff/get?currentPage=${params.currentPage}&&start=${start}&&end=${end}`)
    }else{
        return request(`/api/staff/get`)
    }
}

export async function delStaff(params){
    // console.log(params)
    return request(`/api/staff/delete?id=${params.id}`)
}

export async function getOne(staffId){
    return request(`/api/staff/getOne?id=${staffId}`)
}
export async function edit(data){
    return request('/api/staff/edit',{
        method: 'POST',
        data: data
    })
}