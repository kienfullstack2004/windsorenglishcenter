import axiosConfig from "../axiosConfig"

export const apiGetAllSignUpFreeATralLesson = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            url: '/api/v1/getAllSignUpForATrialLesson',
            method: 'get'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetAllFalseSignUpFreeATralLesson = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            url: '/api/v1/getAllFalseSignUpForATrialLesson',
            method: 'get'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetAllTrueSignUpFreeATralLesson = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            url: '/api/v1/getAllTrueSignUpForATrialLesson',
            method: 'get'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetAllSignUpRecruitment = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            url: '/api/v1/getAllSignUpRecruitment',
            method: 'get'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apiGetAllFalseSignUpRecruitment = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            url: '/api/v1/getAllFalseSignUpRecruitment',
            method: 'get'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apiGetAllTrueSignUpRecruitment = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            url: '/api/v1/getAllTrueSignUpRecruitment',
            method: 'get'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiUpdateFreeLesson = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            url: '/api/v1/updateSignUpFreeLesson',
            method: 'put',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiRegisterFreeLesson = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            url: '/api/v1/signupforatriallesson',
            method: 'post',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apiRegisterRecruitment = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            url: '/api/v1/signuprecruitment',
            method: 'post',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apiGetCountIsFree = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            url: '/api/v1/getCountisFree',
            method: 'get',
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apiGetCountIsRecruitment = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            url: '/api/v1/getCountisRecruitment',
            method: 'get',
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiDeleteRecruitment = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            url: '/api/v1/deleteRecruitment',
            method: 'delete',
            data: id
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apiDeleteFreeLesson = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            url: '/api/v1/deleteFreeLesson',
            method: 'delete',
            data: id
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetCurrentUser = () => new Promise(async(resolve,reject)=>{
    try {
        const response = await axiosConfig({
            url:'/api/v1/getCurrentUser',
            method:'get'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetAllNews = () => new Promise(async(resolve,reject)=>{
    try {
        const response = await axiosConfig({
            url:'/api/v1/getAllNews',
            method:'get'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})


export const apiCreateNewPost = (payload) => new Promise(async(resolve,reject)=>{
    try {
        const response = await axiosConfig({
            url:'/api/v1/createNews',
            method:'post',
            data:payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
}) 

export const apiGetAllAttractive = () => new Promise(async(resolve,reject)=>{
    try {
        const response = await axiosConfig({
            url:'/api/v1/getAllAttractive',
            method:'get'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetOneNew = (id) => new Promise(async(resolve,reject)=>{
    try {
        const response = await axiosConfig({
            url:`http://localhost:5000/api/v1/getOneNew/${id}`,
            method:'get'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})