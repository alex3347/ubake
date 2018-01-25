import {CHANGE_PIC_LIST} from 'actions/mineUpload';


const initState = {
    picList:[]
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case CHANGE_PIC_LIST:
            return {
                ...state,
                picList:state.picList.concat(action.payload)
            };
        default:
            return state;
    }
}