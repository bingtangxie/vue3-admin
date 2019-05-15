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