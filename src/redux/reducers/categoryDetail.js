import {BEGIN_REQUEST, REQUEST_SUCCESS, REQUEST_FAIL, COLLECT, SUPPORT,LOGINED_IN,LOGINED_OUT} from 'actions/categoryDetail';


const initState = {
    categoryDetail:{},
    reload:false,
    loading: true,
    collected:false,
    supported:false,
    logined:false,
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case BEGIN_REQUEST:
            return {
                ...state,
                reload:false,
                loading: true,
            };
        case REQUEST_SUCCESS:
            return {
                ...state,
                categoryDetail: action.payload.data,
                reload:false,
                loading: false,
            };
        case REQUEST_FAIL:
            return {
                ...state,
                reload:true,
                loading: true,
            };
        case COLLECT:
            return {
                ...state,
                collected:!state.collected

            };
        case SUPPORT:
            return {
                ...state,
                supported:!state.supported
            };
        case LOGINED_IN:
            return {
                ...state,
                logined:true
            };
        case LOGINED_OUT:
            return {
                ...state,
                logined:false
            };
        default:
            return state;
    }
}