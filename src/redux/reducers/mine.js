import {LOGINED_IN,LOGINED_OUT} from 'actions/mine';


const initState = {
    logined:false,
};

export default function reducer(state = initState, action) {
    switch (action.type) {
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