import {FIRST_CLICK, TRY_AGAIN, TIME_CONTROL} from 'actions/registerStepFirst';


const initState = {
    timerCount:5,
    timerTitle:'重新获取',
    isFirst:true,
    show:true,//显示默认文字还是倒计时
    init:true,//是否第一次点击,
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case FIRST_CLICK:
            return {
                ...state,
                isFirst:false,
                show:false,
                init:false
            };
        case TRY_AGAIN:
            return {
                ...state,
                timerCount:5,
                timerTitle:'重新获取',
                isFirst:true,
                show:true
            };
        case TIME_CONTROL:
            return {
                ...state,
                timerCount:state.timerCount-1,
                reload:true,
                loading: true,
            };
        default:
            return state;
    }
}