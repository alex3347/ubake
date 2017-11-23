import {GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS, GET_CATEGORY_FAIL} from 'actions/home/category';


const initState = {
    isLoading: false,
    category: {},
    errorMsg: ''
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_CATEGORY_REQUEST:
            return {
                ...state,
                isLoading: true,
                category: {},
                errorMsg: ''
            };
        case GET_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                category: action.category,
                errorMsg: ''
            };
        case GET_CATEGORY_FAIL:
            return {
                ...state,
                isLoading: false,
                category: {},
                errorMsg: '请求错误'
            };
        default:
            return state;
    }
}