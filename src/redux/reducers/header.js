import {CHANGE,FOCUS} from '../actions/header';

/*
* 初始化state
 */

const initState = {
    value:'搜索食谱',
    hasFocus:false
};
/*
* reducer
 */
export default function reducer(state = initState, action) {
    switch (action.type) {
        case FOCUS:
            return {
                value:'',
                hasFocus:true
            };
        case CHANGE:
            return {
                value:event.target.value
            };
        default:
            return state
    }
}