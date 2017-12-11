export const BEGIN_REQUEST = "discover/BEGIN_REQUEST";
export const REQUEST_SUCCESS = "discover/REQUEST_SUCCESS";
export const REQUEST_FAIL = "discover/REQUEST_FAIL";

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

export function request(arg) {
    return function (dispatch) {
        dispatch(beginRequest());

        return fetch('http://rap2api.taobao.org/app/mock/342/POST/api/discover',{
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