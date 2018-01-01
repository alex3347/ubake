import {RENDER_LIST,EDIT,REMOVE,RADIO_CONTROL} from 'actions/buy';


const initState = {
    list:[],
    edit:false,
    radioList:[false,true,false]
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case RENDER_LIST:
            return {
                ...state,
                list:(action.arg ? action.arg : [])
            };
        case EDIT:
            return {
                ...state,
                edit:!state.edit
            };
        case REMOVE:
            return {
                ...state,
                list:action.arg
            };
        case RADIO_CONTROL:
            return {
                ...state,
                radioList:true
            };
        default:
            return state;
    }
}