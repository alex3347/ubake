import {REQUEST_MASTER_SUCCESS, REQUEST_LIST_SUCCESS, REQUEST_FAIL, LOAD_MORE} from 'actions/homeDetail';


const initState = {
    master: [],
    list: [],
    errorMsg: '',
    loading:true,
    isLoadingMore:true
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case REQUEST_MASTER_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                master: action.payload.data.master,
            };
        case REQUEST_LIST_SUCCESS:
            return {
                ...state,
                list:action.payload.data.list,
            };
        case REQUEST_FAIL:
            return {
                ...state,
                errorMsg: '请求错误',
                loading:false
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