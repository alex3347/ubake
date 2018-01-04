import {DISPLAY_CONTROL,INIT} from 'actions/tab';


const initState = {
    home:'',
    market:'',
    discover:'',
    mine:'',
    active: false
};
/*
* reducer
 */
export default function reducer(state = initState, action) {
    switch (action.type) {
        case DISPLAY_CONTROL:
            return {
                ...state,
                active: !state.active
            };
        case INIT:
            let category = state[action.arg]
            return {
                ...state,
                category: 'on'
            };
        default:
            return state
    }
}