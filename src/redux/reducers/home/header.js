import {FOCUS} from 'actions/home/header';

/*
* 初始化state
 */

const initState = {
    hasFocus:false
};
/*
* reducer
 */
export default function reducer(state = initState, action) {
    switch (action.type) {
        case FOCUS:
            return {
                hasFocus:true
            };
        default:
            return state
    }
}