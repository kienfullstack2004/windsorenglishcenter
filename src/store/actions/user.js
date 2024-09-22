import * as apis from "../../services"
import actionTypes from "./actionType";

export const getAllSignUpATrialFreeLesson = () => async (dispatch) => {
    try {
        const response = await apis.apiGetAllSignUpFreeATralLesson();
        if (response?.data?.err === 0) {
            dispatch({
                type: actionTypes.GET_ALL_A_TRIAL_FREE_LESSON_SUCCESS,
                data: response?.data?.data
            })
        } else {
            dispatch({
                type: actionTypes.GET_ALL_A_TRIAL_FREE_LESSON_FAIL,
                data: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ALL_A_TRIAL_FREE_LESSON_FAIL,
            data: null
        })
    }
}

export const getAllSignUpRecruitment = () => async (dispatch) => {
    try {
        const response = await apis.apiGetAllSignUpRecruitment();
        if (response?.data?.err === 0) {
            dispatch({
                type: actionTypes.GET_ALL_RECRUITMENT_SUCCESS,
                data: response?.data?.data
            })
        } else {
            dispatch({
                type: actionTypes.GET_ALL_RECRUITMENT_FAIL,
                data: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ALL_RECRUITMENT_FAIL,
            data: null
        })
    }
}

export const updateOneFreeLesson = (payload) => async (dispatch) => {
    try {
        const response = await apis.apiUpdateFreeLesson(payload);
        if (response?.data?.err === 0) {
            dispatch({
                type: actionTypes.UPDATE_ONE_FREE_LESSON_SUCCESS,
                msg: response?.data?.msg
            })
        } else {
            dispatch({
                type: actionTypes.UPDATE_ONE_FREE_LESSON_FAIL,
                msg: response?.data?.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.UPDATE_ONE_FREE_LESSON_FAIL,
            msg: ''
        })
    }
}

export const registerFreeLesson = (payload) => async (dispatch) => {
    try {
        const response = await apis.apiRegisterFreeLesson(payload);
        if (response?.data?.err === 0) {
            dispatch({
                type: actionTypes.REGISTER_FREE_LESSON_SUCCESS,
                msg: response?.data?.msg
            })
        } else {
            dispatch({
                type: actionTypes.REGISTER_FREE_LESSON_FAIL,
                msg: response?.data?.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.REGISTER_FREE_LESSON_FAIL,
            msg: ''
        })
    }
}
export const registerRecruitment = (payload) => async (dispatch) => {
    try {
        const response = await apis.apiRegisterRecruitment(payload);
        if (response?.data?.err === 0) {
            dispatch({
                type: actionTypes.REGISTER_RECRUITMENT_SUCCESS,
                msg: response?.data?.msg
            })
        } else {
            dispatch({
                type: actionTypes.REGISTER_RECRUITMENT_FAIL,
                msg: response?.data?.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.REGISTER_RECRUITMENT_FAIL,
            msg: ''
        })
    }
}
export const getCountIsFree = () => async (dispatch) => {
    try {
        const response = await apis.apiGetCountIsFree();
        if (response?.data?.err === 0) {
            dispatch({
                type: actionTypes.GET_COUNT_ISFREE_SUCCESS,
                count: response?.data?.data
            })
        } else {
            dispatch({
                type: actionTypes.GET_COUNT_ISFREE_FAIL,
                count: 0
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_COUNT_ISFREE_FAIL,
            count: 0
        })
    }
}
export const getCountIsRecruitment = () => async (dispatch) => {
    try {
        const response = await apis.apiGetCountIsRecruitment();
        if (response?.data?.err === 0) {
            dispatch({
                type: actionTypes.GET_COUNT_ISRECRUITMENT_SUCESS,
                count: response?.data?.data
            })
        } else {
            dispatch({
                type: actionTypes.GET_COUNT_ISRECRUITMENT_FAIL,
                count: 0
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_COUNT_ISRECRUITMENT_FAIL,
            count: 0
        })
    }
}

export const getAllFalseIsFree = () => async (dispatch) => {
    try {
        const response = await apis.apiGetAllFalseSignUpFreeATralLesson();
        if (response?.data?.err === 0) {
            dispatch({
                type: actionTypes.GET_ALL_FALSE_FREE_LESSON_SUCCESS,
                data: response?.data?.data
            })
        } else {
            dispatch({
                type: actionTypes.GET_ALL_FALSE_FREE_LESSON_FAIL,
                data: response?.data?.data
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ALL_FALSE_FREE_LESSON_FAIL,
            data: null
        })
    }
}

export const getAllTrueIsFree = () => async (dispatch) => {
    try {
        const response = await apis.apiGetAllTrueSignUpFreeATralLesson();
        if (response?.data?.err === 0) {
            dispatch({
                type: actionTypes.GET_ALL_TRUE_FREE_LESSON_SUCCESS,
                data: response?.data?.data
            })
        } else {
            dispatch({
                type: actionTypes.GET_ALL_TRUE_FREE_LESSON_FAIL,
                data: response?.data?.data
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ALL_TRUE_FREE_LESSON_FAIL,
            data: null
        })
    }
}

export const deleteOneRecruitment = (payload) => async (dispatch) => {
    try {
        const response = await apis.apiDeleteRecruitment(payload);
        if (response?.data?.err === 0) {
            dispatch({
                type: actionTypes.DELETE_RECRUITMENT_SUCCESS,
                msg: response?.data?.msg
            })
        } else {
            dispatch({
                type: actionTypes.DELETE_RECRUITMENT_FAIL,
                msg: response?.data?.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.DELETE_RECRUITMENT_FAIL,
            msg: ''
        })
    }
}
export const deleteOneFreeLesson = (payload) => async (dispatch) => {
    try {
        const response = await apis.apiDeleteFreeLesson(payload);
        if (response?.data?.err === 0) {
            dispatch({
                type: actionTypes.DELETE_FREE_LESSON_SUCCESS,
                msg: response?.data?.msg
            })
        } else {
            dispatch({
                type: actionTypes.DELETE_FREE_LESSON_FAIL,
                msg: response?.data?.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.DELETE_FREE_LESSON_FAIL,
            msg: ''
        })
    }
}

export const getCurrent = () => async (dispatch) => {
    try {
        const response = await apis.apiGetCurrentUser();
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_CURRENT_SUCCESS,
                data: response?.data?.data
            })
        } else {
            dispatch({
                type: actionTypes.GET_CURRENT_FAIL,
                data: response?.data?.data
            })
            dispatch({
                type: actionTypes.LOGOUT
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_CURRENT_FAIL,
            data: undefined
        })
        dispatch({
            type: actionTypes.LOGOUT
        })
    }
}

export const getAllNews = () => async (dispatch) => {
    try {
        const response = await apis.apiGetAllNews();
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_ALL_NEWS_SUCCESS,
                data: response?.data?.data,
                msg: response?.data?.msg
            })
        } else {
            dispatch({
                type: actionTypes.GET_ALL_NEWS_FAIL,
                data: null,
                msg: response?.data?.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ALL_NEWS_FAIL,
            data: null
        })
    }
}

export const getAllAtractive = () => async (dispatch) => {
    try {
        const response = await apis.apiGetAllAttractive();
        if (response?.data?.err === 0) {
            dispatch({
                type: actionTypes.GET_ALL_ATTRACTIVE_SUCCESS,
                data: response?.data?.data,
                msg: response?.data?.msg
            })
        } else {
            dispatch({
                type: actionTypes.GET_ALL_ATTRACTIVE_FAIL,
                msg: response?.data?.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ALL_ATTRACTIVE_FAIL,
            data: null
        })
    }
}

export const getOneNew = (id) => async (dispatch) => {
    try {
        const response = await apis.apiGetOneNew(id);
        if(response?.data?.err === 0){
            dispatch({
                type:actionTypes.GET_ONE_NEW_SUCCESS,
                msg:response?.data?.msg,
                data:response?.data?.data
            })
        }else
        {
            dispatch({
                type:actionTypes.GET_ONE_NEW_FAIL,
                msg:response?.data?.msg,
                data:response?.data?.data
            })
        }
    } catch (error) {
        dispatch({
            type:actionTypes.GET_ONE_NEW_SUCCESS,
            msg:'',
            data:null
        })
    }
}