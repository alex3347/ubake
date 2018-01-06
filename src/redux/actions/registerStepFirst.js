export const FIRST_CLICK = "registerStepFirst/FIRST_CLICK";
export const TRY_AGAIN = "registerStepFirst/TRY_AGAIN";
export const TIME_CONTROL = "registerStepFirst/TIME_CONTROL";
export const PHONE_NUMBER_TIP_CONTROL = "registerStepFirst/PHONE_NUMBER_TIP_CONTROL";
export const VERIFICATION_CODE_TIP_CONTROL = "registerStepFirst/VERIFICATION_CODE_TIP_CONTROL";
export const INIT = "registerStepFirst/INIT";

function firstClick() {
    return {
        type: FIRST_CLICK
    }
}

function tryAgain() {
    return {
        type: TRY_AGAIN,
    }
}


function timeControl() {
    return {
        type: TIME_CONTROL
    }
}

function phoneNumberTipControl() {
    return {
        type: PHONE_NUMBER_TIP_CONTROL
    }
}

function verificationCodeTipControl() {
    return {
        type: VERIFICATION_CODE_TIP_CONTROL
    }
}

function initType() {
    return {
        type: INIT
    }
}
//发送短信倒数,正则验证手机号
export function interval(ref) {
    return function (dispatch,getState) {
        //正则验证
        if(/^1[3|4|5|8][0-9]\d{4,8}$/.test(ref.value)){
            if(getState().registerStepFirst.isFirst){
                dispatch(firstClick());

                let temp = setInterval(() =>{
                    let state = getState().registerStepFirst;

                    if(state.timerCount===1){
                        temp&&clearInterval(temp);
                        dispatch(tryAgain());
                    }else{
                        dispatch(timeControl());
                    }
                },1000);
            }
        }else{
            ref.focus();
            dispatch(phoneNumberTipControl());
        }
    }
}

//发送短信倒数,正则验证手机号
export function submit(refs,context) {
    return function (dispatch) {
        let param1 = /^1[3|4|5|8][0-9]\d{4,8}$/.test(refs.phoneNumber.value)
        let param2 = /^\d{6}$/.test(refs.verificationCode.value)

        if( param1 && param2){
            return fetch('',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phoneNumber: refs.phoneNumber.value,
                    verificationCode: refs.verificationCode.value,
                    })
                })
                .then((response => {
                    return response.json()
                }))
                .then((json) => {
                    }
                ).catch(
                    () => {
                        //没有配置服务端，暂时默认通过认证,直接跳转到下一步
                        // dispatch(verificationCodeTipControl());
                        context.router.history.push(context.router.history.location.arg)
                    }
                )
        }else{
            if(!param1 && !param2){
                dispatch(phoneNumberTipControl());
                return;
            }
            if(!param1){
                dispatch(phoneNumberTipControl());
            }
            if(!param2){
                dispatch(verificationCodeTipControl());
            }
        }

    }
}

export function init() {
    return function (dispatch) {
        dispatch(initType());
    }
}