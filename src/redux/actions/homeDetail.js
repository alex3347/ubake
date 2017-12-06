export const REQUEST_MASTER_SUCCESS = "homeDetail/REQUEST_MASTER_SUCCESS";
export const REQUEST_LIST_SUCCESS = "homeDetail/REQUEST_LIST_SUCCESS";
export const REQUEST_FAIL = "homeDetail/REQUEST_FAIL";
export const LOAD_MORE = "homeDetail/LOAD_MORE";

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

function requestFail(error) {
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
            .then([payload_1, payload_2, ...] => {
                    dispatch(requestMasterSuccess(payload_1))
                    dispatch(requestListSuccess(payload_2))
        })
            .catch(
                error => dispatch(requestFail(error))
            )

    }
}

export function loadMoreFn() {
    return function (dispatch) {
        dispatch(loadMore());
    }
}
