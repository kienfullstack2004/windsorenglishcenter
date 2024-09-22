import actionTypes from "../actions/actionType";
const initState = {
    getAllFreeLesson: [],
    getAllRecruitment: [],
    getAllFalseFreeLesson: [],
    getAllTrueFreeLesson: [],
    getAllFalseRecruitment: [],
    getAllTrueRecruitment: [],
    msg: '',
    countIsFree: 0,
    countIsRecruitment: 0,
    currentData:{},
    getAllPost:[],
    getAllAttractive:[],
    getOneNew:[]
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_A_TRIAL_FREE_LESSON_SUCCESS:
            return {
                ...state,
                getAllFreeLesson: action.data
            }
        case actionTypes.GET_ALL_A_TRIAL_FREE_LESSON_FAIL:
            return {
                ...state,
                getAllFreeLesson: []
            }
        case actionTypes.GET_ALL_RECRUITMENT_SUCCESS:
            return {
                ...state,
                getAllRecruitment: action.data
            }
        case actionTypes.GET_ALL_RECRUITMENT_FAIL:
            return {
                ...state,
                getAllRecruitment: []
            }
        case actionTypes.UPDATE_ONE_FREE_LESSON_SUCCESS:
        case actionTypes.UPDATE_ONE_FREE_LESSON_FAIL:
        case actionTypes.REGISTER_FREE_LESSON_FAIL:
        case actionTypes.REGISTER_FREE_LESSON_SUCCESS:
        case actionTypes.REGISTER_RECRUITMENT_FAIL:
        case actionTypes.REGISTER_RECRUITMENT_SUCCESS:
            return {
                ...state,
                msg: action.msg
            }
        case actionTypes.GET_COUNT_ISFREE_FAIL:
        case actionTypes.GET_COUNT_ISFREE_SUCCESS:
            return {
                ...state,
                countIsFree: action.count
            }
        case actionTypes.GET_COUNT_ISRECRUITMENT_FAIL:
        case actionTypes.GET_COUNT_ISRECRUITMENT_SUCESS:
            return {
                ...state,
                countIsRecruitment: action.count
            }
        case actionTypes.GET_ALL_FALSE_FREE_LESSON_SUCCESS:
        case actionTypes.GET_ALL_FALSE_FREE_LESSON_FAIL:
            return {
                ...state,
                getAllFalseFreeLesson: action.data
            }
        case actionTypes.GET_ALL_TRUE_FREE_LESSON_SUCCESS:
        case actionTypes.GET_ALL_TRUE_FREE_LESSON_FAIL:
            return {
                ...state,
                getAllTrueFreeLesson: action.data
            }
        case actionTypes.DELETE_RECRUITMENT_SUCCESS:
        case actionTypes.DELETE_FREE_LESSON_SUCCESS:
        case actionTypes.DELETE_FREE_LESSON_FAIL:
        case actionTypes.DELETE_RECRUITMENT_FAIL:
            return {
                ...state,
                msg: action.msg
            }
        case actionTypes.GET_CURRENT_SUCCESS:
        case actionTypes.GET_CURRENT_FAIL:
            return {
                ...state,
                currentData:action.data
            }
        case actionTypes.GET_ALL_NEWS_SUCCESS:
        case actionTypes.GET_ALL_NEWS_FAIL:
            return {
                ...state,
                getAllPost : action.data,
                msg:action.msg
            }
        case actionTypes.GET_ALL_ATTRACTIVE_SUCCESS:
        case actionTypes.GET_ALL_ATTRACTIVE_FAIL:
            return {
                ...state,
                getAllAttractive:action.data
            }
        case actionTypes.GET_ONE_NEW_SUCCESS:
        case actionTypes.GET_ONE_NEW_FAIL:
            return {
                ...state,
                getOneNew:action.data
            }
        default:
            return state;
    }
}

export default userReducer;