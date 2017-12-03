import {GET_MASTER_REQUEST, GET_MASTER_SUCCESS, GET_MASTER_FAIL} from 'actions/homeDetail/master';


const initState = {
    master: [],
    errorMsg: ''
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_MASTER_REQUEST:
            return {
                ...state,
                master: [],
                errorMsg: ''
            };
        case GET_MASTER_SUCCESS:
            return {
                ...state,
                master: action.json.data.master,
                errorMsg: ''
            };
        case GET_MASTER_FAIL:
            return {
                ...state,
                master: [],
                errorMsg: '请求错误'
            };
        default:
            return state;
    }
}