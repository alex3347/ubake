export const CHECK_PWD = "FindPwdStepSec/CHECK_PWD";
export const CHECK_PWD_SAME = "FindPwdStepSec/CHECK_PWD_SAME";
export const INIT = "FindPwdStepSec/INIT";

function checkPwdControl() {
    return {
        type: CHECK_PWD
    }
}

function checkPwdSameControl() {
    return {
        type: CHECK_PWD_SAME
    }
}

function init() {
    return {
        type: INIT
    }
}


//正则验证用户名，密码，同时检测两次密码是否相同
export function submit(refs,context) {
    return function (dispatch) {
        let param = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{6,16}$/.test(refs.pwd.value)

        if(param && (refs.pwd.value === refs.pwdEnsure.value)){
            dispatch(init())
            return fetch('',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    pwd: refs.pwdEnsure.value,
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
                        context.router.history.push('/Login')
                    }
                )
        }else{
            if(!param){
                //检查密码
                dispatch(checkPwdControl());
                refs.pwd.focus();
            }
            if(!(refs.pwd.value === refs.pwdEnsure.value)){
                //检查两次密码是否相同
                dispatch(checkPwdSameControl());
                refs.pwdEnsure.focus();
            }
        }

    }
}

