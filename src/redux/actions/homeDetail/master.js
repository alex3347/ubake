export const GET_MASTER_REQUEST = "master/GET_MASTER_REQUEST";
export const GET_MASTER_SUCCESS = "master/GET_MASTER_SUCCESS";
export const GET_MASTER_FAIL = "master/GET_MASTER_FAIL";

function getMasterRequest() {
    return {
        type: GET_MASTER_REQUEST
    }
}

function getMasterSuccess(json) {
    return {
        type: GET_MASTER_SUCCESS,
        json: json
    }
}

function getMasterFail() {
    return {
        type: GET_MASTER_FAIL
    }
}

export function getMaster() {
    return function (dispatch) {
        dispatch(getMasterRequest());

        return fetch('http://rap2api.taobao.org/app/mock/342/POST/api/homeDetail/master',{
            method:'post',
            body: {
                category:''
            }

        })
            .then((response => {
                return response.json()
            }))
            .then((json) => {
            console.log(json)
                    dispatch(getMasterSuccess(json))
                }
            ).catch(
                () => {
                    dispatch(getMasterFail());
                }
            )
    }
}