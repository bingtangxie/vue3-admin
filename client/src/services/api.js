import axios from 'axios'
export async function reqUser(){
    return new Promise((resolve, reject) => {
       axios.get('/api/users').then((response)=>{
           console.log('response', response)
           resolve(response.data)
       }).catch((error)=>{
           reject(error)
       })
    })
}