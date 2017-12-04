export const GET_LIST_REQUEST = "list/GET_LIST_REQUEST";
export const GET_LIST_SUCCESS = "list/GET_LIST_SUCCESS";
export const GET_LIST_FAIL = "list/GET_LIST_FAIL";

function getListRequest() {
    return {
        type: GET_LIST_REQUEST
    }
}

function getListSuccess(json) {
    return {
        type: GET_LIST_SUCCESS,
        json: json
    }
}

function getListFail() {
    return {
        type: GET_LIST_FAIL
    }
}

export function getList() {
    return function (dispatch) {
        dispatch(getListRequest());

        return fetch('http://rap2api.taobao.org/app/mock/342/POST/api/homeDetail/list',{
            method:'post',
            body: {
                category:''
            }

        })
            .then((response => {
                return response.json()
            }))
            .then((json) => {
                    dispatch(getListSuccess(json))
                }
            ).catch(
                () => {
                    dispatch(getListFail());
                }
            )
    }
}