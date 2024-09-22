import actionTypes from "./actionType";
import * as apis from "../../services"

export const register = payload => async (dispatch) => {
    try {
        const response = await apis.apiRegister(payload);

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.REGISTER_SUCCESS,
                token: null,
                msg: response?.data?.msg
            })
        } else {
            dispatch({
                type: actionTypes.REGISTER_FAIL,
                token: null,
                msg: response?.data?.msg
            })
        }

    } catch (error) {
        return dispatch({
            type: actionTypes.REGISTER_FAIL,
            token: null
        })
    }
}
export const login = payload => async (dispatch) => {
    try {
        const response = await apis.apiLogin(payload);

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.LOGIN_SUCCESS,
                token: response?.data?.access_token
            })
        } else {
            dispatch({
                type: actionTypes.LOGIN_FAIL,
                token: null
            })
        }


    } catch (error) {
        return dispatch({
            type: actionTypes.LOGIN_FAIL,
            token: null
        })
    }
}

export const logout = () => {
    return {
        type: actionTypes.LOGOUT,
    }
}

export const createNews = (payload) => async (dispatch) => {
    try {
        const response = await apis.apiCreateNewPost(payload);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.CREATE_NEWS_SUCCESS,
                msg: response?.data?.msg
            })
        } else {
            dispatch({
                type: actionTypes.CREATE_NEWS_FAIL,
                msg: response?.data?.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.CREATE_NEWS_FAIL,
            msg: ''
        })
    }
}

export const createAttractive = (payload) => async (dispatch) => {
    try {
        const response = await apis.apiCreateAttractive(payload);
        if (response?.data?.err === 0) {
            dispatch({
                type: actionTypes.CREATE_ATTRACTIVE_SUCCESS,
                msg: response?.data?.msg
            })
        } else {
            dispatch({
                type: actionTypes.CREATE_ATTRACTIVE_FAIL,
                msg: response?.data?.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.CREATE_ATTRACTIVE_FAIL,
            msg: ''
        })
    }
}