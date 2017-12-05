import {GET_LIST_REQUEST, GET_LIST_SUCCESS, GET_LIST_FAIL, LOAD_MORE} from 'actions/homeDetail/list';


const initState = {
    list: [],
    errorMsg: '',
    isLoadingMore:true
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_LIST_REQUEST:
            return {
                ...state,
                list: [],
                errorMsg: ''
            };
        case GET_LIST_SUCCESS:
            return {
                ...state,
                list: action.json.data.list,
                errorMsg: ''
            };
        case GET_LIST_FAIL:
            return {
                ...state,
                list: [],
                errorMsg: '请求错误'
            };
        case LOAD_MORE:
            return {
                ...state,
                isLoadingMore:false
            };
        default:
            return state;
    }
}