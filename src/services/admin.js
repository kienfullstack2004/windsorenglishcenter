import axiosConfig from "../axiosConfig"

export const apiCreateAttractive = (payload) => new Promise(async(resolve,reject)=>{
    try {
        const response = await axiosConfig({
            url:'/api/v1/createAttractive',
            method:'post',
            data:payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})