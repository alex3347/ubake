import {GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS, GET_CATEGORY_FAIL} from 'actions/home/category';


const initState = {
    category: [],
    reload:false,
    isLoading: true,
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_CATEGORY_REQUEST:
            return {
                ...state,
                reload:false,
                isLoading: true,
            };
        case GET_CATEGORY_SUCCESS:
            return {
                ...state,
                category: action.json.data.category,
                isLoading: false,
            };
        case GET_CATEGORY_FAIL:
            return {
                ...state,
                reload:true,
                isLoading: true,
            };
        default:
            return state;
    }
}