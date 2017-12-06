import {REQUEST_MASTER_SUCCESS, REQUEST_LIST_SUCCESS, REQUEST_ALL_SUCCESS, REQUEST_FAIL, LOAD_MORE} from 'actions/homeDetail';


const initState = {
    master: [],
    list: [],
    msg: '',
    loading:true,
    isLoadingMore:true
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case REQUEST_MASTER_SUCCESS:
            return {
                ...state,
                master: action.payload.data.master,
            };
        case REQUEST_LIST_SUCCESS:
            return {
                ...state,
                list:action.payload.data.list,
            };
        case REQUEST_ALL_SUCCESS:
            return {
                ...state,
                loading:false,
            };
        case REQUEST_FAIL:
            return {
                ...state,
                msg: '请检查网络后重试',
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