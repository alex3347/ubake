import {CHANGE_PIC_LIST,REMOVE_PIC_LIST_ITEM} from 'actions/mineUpload';


const initState = {
    picList:[]
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case REMOVE_PIC_LIST_ITEM:
            return {
                ...state,
                picList:action.payload
            };
        case CHANGE_PIC_LIST:
            return {
                ...state,
                picList:state.picList.concat(action.payload)
            };
        default:
            return state;
    }
}