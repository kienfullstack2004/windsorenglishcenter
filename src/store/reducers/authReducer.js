import actionTypes from "../actions/actionType";

const initState = {
    isLoggedIn: false,
    token: null,
    msg: '',
    isRegisted: false
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                msg: action.msg,
                isRegisted: true
            }
        case actionTypes.REGISTER_FAIL:
            return {
                ...state,
                msg: action.msg
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: action.token
            }
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                token: action.token
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                isRegisted: false,
                token:null
            }
        case actionTypes.CREATE_NEWS_SUCCESS:
        case actionTypes.CREATE_ATTRACTIVE_SUCCESS:
        case actionTypes.CREATE_NEWS_FAIL:
        case actionTypes.CREATE_ATTRACTIVE_FAIL:
            return {
                ...state,
                msg: action.msg
            }
        default:
            return state;
    }
}

export default authReducer;