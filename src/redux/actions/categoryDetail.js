export const BEGIN_REQUEST = "categoryDetail/BEGIN_REQUEST";
export const REQUEST_SUCCESS = "categoryDetail/REQUEST_SUCCESS";
export const REQUEST_FAIL = "categoryDetail/REQUEST_FAIL";
export const COLLECT = "categoryDetail/COLLECT";
export const SUPPORT = "categoryDetail/SUPPORT";
export const LOGINED_IN = "mine/LOGINED_IN";
export const LOGINED_OUT = "mine/LOGINED_OUT";

function beginRequest() {
    return {
        type: BEGIN_REQUEST
    }
}

function requestSuccess(payload) {
    return {
        type: REQUEST_SUCCESS,
        payload: payload
    }
}


function requestFail() {
    return {
        type: REQUEST_FAIL
    }
}

function collectType() {
    return {
        type: COLLECT
    }
}

function supportType() {
    return {
        type: SUPPORT
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

export function request(arg) {
    return function (dispatch) {
        dispatch(beginRequest());

        return fetch('http://rap2api.taobao.org/app/mock/342/POST/api/categoryDetail/detail',{
            method:'post',
            body: {
                id:Number(arg)
            }

        })
            .then((response => {
                return response.json()
            }))
            .then((payload) => {
                    dispatch(requestSuccess(payload))
                }
            ).catch(
                error => {
                    console.log(error)
                    dispatch(requestFail());
                }
            )
    }
}

export function collect() {
    return function (dispatch) {
        dispatch(collectType());
    }
}

export function support() {
    return function (dispatch,getState) {
        dispatch(supportType());
        let state = getState().categoryDetail
        if(state.supported){
            state.categoryDetail.praise++
        }else{
            state.categoryDetail.praise--
        }
    }
}

export function toLocalStorage() {
    return function (dispatch,getState) {
        let list = getState().categoryDetail.categoryDetail.list

        localStorage.setItem('buyList',JSON.stringify(list))
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