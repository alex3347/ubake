export const LOGINED_IN = "mine/LOGINED_IN";
export const LOGINED_OUT = "mine/LOGINED_OUT";


function loginedIn() {
    return {
        type: LOGINED_IN
    }
}

function loginedOut() {
    return {
        type: LOGINED_OUT
    }
}

export function init() {
    return function (dispatch) {

        //判断token是否存在
        if(localStorage.getItem('token')){
            dispatch(loginedIn());
        }else{
            dispatch(loginedOut());
        }

    }
}