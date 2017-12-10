import {BEGIN_REQUEST, REQUEST_SUGGEST_SUCCESS, REQUEST_CATEGORY_SUCCESS, REQUEST_ALL_SUCCESS, REQUEST_FAIL,
    BEGIN_CATEGORY_REQUEST, REQUEST_CATEGORY_ALONE_SUCCESS,REQUEST_CATEGORY_FAIL} from 'actions/market';


const initState = {
    suggest: [],
    category: [],
    reload: false,
    loading:true,
    categoryReload: false,
    categoryLoading:false
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case BEGIN_REQUEST:
            return {
                ...state,
                reload: false
            };
        case REQUEST_SUGGEST_SUCCESS:
            return {
                ...state,
                suggest: action.payload.data.list,
            };
        case REQUEST_CATEGORY_SUCCESS:
            return {
                ...state,
                category:action.payload.data.list,
            };
        case REQUEST_ALL_SUCCESS:
            return {
                ...state,
                loading:false,
            };
        case REQUEST_FAIL:
            return {
                ...state,
                reload: true
            };


        case BEGIN_CATEGORY_REQUEST:
            return {
                ...state,
                category: [],
                categoryReload: false,
                categoryLoading:true
            };
        case REQUEST_CATEGORY_ALONE_SUCCESS:
            return {
                ...state,
                category: action.payload.data.list,
                categoryLoading:false,
            };
        case REQUEST_CATEGORY_FAIL:
            return {
                ...state,
                categoryReload: true
            };
        default:
            return state;
    }
}