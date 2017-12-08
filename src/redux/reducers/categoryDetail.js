import {BEGIN_REQUEST, REQUEST_SUCCESS, REQUEST_FAIL} from 'actions/categoryDetail';


const initState = {
    categoryDetail:{},
    reload:false,
    loading: true,
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
        default:
            return state;
    }
}