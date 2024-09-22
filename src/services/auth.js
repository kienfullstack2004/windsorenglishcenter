import axiosConfig from "../axiosConfig";
import axios from "axios";

export const apiRegister = (payload) => new Promise(async(resolve,reject)=>{
    try {
        const response = await axiosConfig({
            url:'/api/v1/register',
            method:'post',
            data:payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apiLogin = (payload) => new Promise(async(resolve,reject)=>{
    try {
        const response = await axiosConfig({
            url:'/api/v1/login',
            method:'post',
            data:payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiUploadImages = (images) => new Promise(async(resolve,reject)=>{
    try {
        const response = await axios({
            url:`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
            method:'post',
            data:images
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

