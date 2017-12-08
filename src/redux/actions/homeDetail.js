export const BEGIN_REQUEST = "homeDetail/BEGIN_REQUEST";
export const REQUEST_MASTER_SUCCESS = "homeDetail/REQUEST_MASTER_SUCCESS";
export const REQUEST_LIST_SUCCESS = "homeDetail/REQUEST_LIST_SUCCESS";
export const REQUEST_ALL_SUCCESS = "homeDetail/REQUEST_ALL_SUCCESS";
export const REQUEST_FAIL = "homeDetail/REQUEST_FAIL";
export const LOAD_MORE = "homeDetail/LOAD_MORE";

function beginRequest() {
    return {
        type: BEGIN_REQUEST
    }
}

function requestMasterSuccess(payload) {
    return {
        type: REQUEST_MASTER_SUCCESS,
        payload: payload
    }
}

function requestListSuccess(payload) {
    return {
        type: REQUEST_LIST_SUCCESS,
        payload: payload
    }
}

function hasLoaded() {
    return {
        type: REQUEST_ALL_SUCCESS
    }
}

function requestFail() {
    return {
        type: REQUEST_FAIL
    }
}

function loadMore() {
    return {
        type: LOAD_MORE
    }
}

export function request() {
    return function (dispatch) {
        dispatch(beginRequest())
        return Promise.all([
            fetch('http://rap2api.taobao.org/app/mock/342/POST/api/homeDetail/master',{
                method:'post',
                body: {
                    category:''
                }

            }),
            fetch('http://rap2api.taobao.org/app/mock/342/POST/api/homeDetail/list',{
                method:'post',
                body: {
                    category:''
                }

            })
        ])
            .then(responses => responses.map(response => response.json()))
            .then(([payload_1, payload_2]) => {
                payload_1.then(function(payload){
                    dispatch(requestMasterSuccess(payload))
                })
                payload_2.then(function(payload){
                    dispatch(requestListSuccess(payload))
                })
            })
            .then(() => dispatch(hasLoaded()))
            .catch(
                error => {
                    console.log(error)
                    dispatch(requestFail())
                }
            )

    }
}

export function loadMoreFn() {
    return function (dispatch) {
        dispatch(loadMore());
    }
}
