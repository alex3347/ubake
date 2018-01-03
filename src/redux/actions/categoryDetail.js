export const BEGIN_REQUEST = "categoryDetail/BEGIN_REQUEST";
export const REQUEST_SUCCESS = "categoryDetail/REQUEST_SUCCESS";
export const REQUEST_FAIL = "categoryDetail/REQUEST_FAIL";
export const COLLECT = "categoryDetail/COLLECT";
export const SUPPORT = "categoryDetail/SUPPORT";

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