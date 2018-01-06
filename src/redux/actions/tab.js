export const DISPLAY_CONTROL = "tab/DISPLAY_CONTROL";
export const INIT = "tab/INIT";
export const LOGINED_IN = "tab/LOGINED_IN";
export const LOGINED_OUT = "tab/LOGINED_OUT";

function displayControlType() {
    return {
        type: DISPLAY_CONTROL
    }
}

function initType(arg) {
    return {
        type: INIT,
        arg:arg
    }
}

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

export function displayControl() {
    return function (dispatch) {
        dispatch(displayControlType())
    }
}

export function init(arg) {
    return function (dispatch) {
        dispatch(initType(arg))
    }
}

export function login() {
    return function (dispatch,) {

        //判断token是否存在
        if(localStorage.getItem('token')){
            dispatch(loginedIn());
        }else{
            dispatch(loginedOut());
        }

    }
}