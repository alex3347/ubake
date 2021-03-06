import {FIRST_CLICK, TRY_AGAIN, TIME_CONTROL, PHONE_NUMBER_TIP_CONTROL, VERIFICATION_CODE_TIP_CONTROL,INIT} from 'actions/registerStepFirst';


const initState = {
    timerCount:5,
    timerTitle:'重新获取',
    isFirst:true,//是否第一次点击,决定显示获取验证码还是重新获取
    show:true,//显示默认文字还是倒计时
    phoneNumberTip:false,//手机号不符规则的提示
    verificationCode:false,//验证码不符规则的提示
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case FIRST_CLICK:
            return {
                ...state,
                isFirst:false,
                show:false,
                phoneNumberTip:false,
            };
        case TRY_AGAIN:
            return {
                ...state,
                timerCount:5,
                timerTitle:'重新获取',
                show:true,
                phoneNumberTip:false,
                verificationCode:false,
            };
        case TIME_CONTROL:
            return {
                ...state,
                timerCount:state.timerCount-1,
                reload:true,
                loading: true,
            };
        case PHONE_NUMBER_TIP_CONTROL:
            return {
                ...state,
                verificationCode:false,
                phoneNumberTip:true
            };
        case VERIFICATION_CODE_TIP_CONTROL:
            return {
                ...state,
                phoneNumberTip:false,
                verificationCode:true
            };
        case INIT:
            return {
                ...state,
                isFirst:true,
                show:true,
                phoneNumberTip:false,
                verificationCode:false,
            };
        default:
            return state;
    }
}