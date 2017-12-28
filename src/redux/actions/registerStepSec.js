export const CHECK_NAME = "registerStepSec/CHECK_NAME";
export const CHECK_PWD = "registerStepSec/CHECK_PWD";
export const CHECK_PWD_SAME = "registerStepSec/CHECK_PWD_SAME";
export const INIT = "registerStepSec/INIT";

function checkNameControl() {
    return {
        type: CHECK_NAME
    }
}

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
        let param1 = /^[a-zA-Z0-9_-]{4,16}$/.test(refs.name.value)
        let param2 = /^(\w){6,20}$/.test(refs.pwd.value)

        if( param1 && param2 && (refs.pwd.value === refs.pwdEnsure.value)){
            dispatch(init())
            return fetch('',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: refs.name.value,
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
                        context.router.history.replace('/')
                    }
                )
        }else{
            if(!param1 && !param2){
                dispatch(checkNameControl());
                return;
            }
            if(!param1){
                //检查用户名
                dispatch(checkNameControl());
                refs.name.focus();
            }
            if(!param2){
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

