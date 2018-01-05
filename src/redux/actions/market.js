export const BEGIN_REQUEST = "market/BEGIN_REQUEST";
export const REQUEST_SUGGEST_SUCCESS = "market/REQUEST_SUGGEST_SUCCESS";
export const REQUEST_CATEGORY_SUCCESS = "market/REQUEST_CATEGORY_SUCCESS";
export const REQUEST_ALL_SUCCESS = "market/REQUEST_ALL_SUCCESS";
export const REQUEST_FAIL = "market/REQUEST_FAIL";

export const BEGIN_CATEGORY_REQUEST = "market/BEGIN_CATEGORY_REQUEST";
export const REQUEST_CATEGORY_ALONE_SUCCESS = "market/REQUEST_CATEGORY_ALONE_SUCCESS";
export const REQUEST_CATEGORY_FAIL = "market/REQUEST_CATEGORY_FAIL";
export const CHECK_TIP_STATUS_TYPE = "market/CHECK_TIP_STATUS_TYPE";

import styles from '../../pages/Market/Header/Header.scss'


function beginRequest() {
    return {
        type: BEGIN_REQUEST
    }
}

function requestSuggestSuccess(payload) {
    return {
        type: REQUEST_SUGGEST_SUCCESS,
        payload: payload
    }
}

function requestCategorySuccess(payload) {
    return {
        type: REQUEST_CATEGORY_SUCCESS,
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

export function request() {
    return function (dispatch) {
        dispatch(beginRequest())
        return Promise.all([
            fetch('http://rap2api.taobao.org/app/mock/342/GET/api/market/suggest'),
            fetch('http://rap2api.taobao.org/app/mock/342/POST/api/market/category',{
                method:'post',
                body: {
                    category:''
                }

            })
        ])
            .then(responses => responses.map(response => response.json()))
            .then(([payload_1, payload_2]) => {
                payload_1.then(function(payload){
                    dispatch(requestSuggestSuccess(payload))
                })
                payload_2.then(function(payload){
                    dispatch(requestCategorySuccess(payload))
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


function beginCategoryRequest() {
    return {
        type: BEGIN_CATEGORY_REQUEST
    }
}

function requestCategoryAloneSuccess(payload) {
    return {
        type: REQUEST_CATEGORY_ALONE_SUCCESS,
        payload: payload
    }
}


function requestCategoryFail() {
    return {
        type: REQUEST_CATEGORY_FAIL
    }
}


export function requestCategory() {
    return function (dispatch) {
        dispatch(beginCategoryRequest())
        return fetch('http://rap2api.taobao.org/app/mock/342/POST/api/market/category',{
            method:'post',
            body: {
                category:''
            }
        })
            .then((response => {
                return response.json()
            }))
            .then((payload) => {
                    dispatch(requestCategoryAloneSuccess(payload))
                }
            ).catch(
                () => {
                    dispatch(requestCategoryFail());
                }
            )

    }
}


function checkTipStatusType(arg) {
    return {
        type: CHECK_TIP_STATUS_TYPE,
        arg:arg || ''
    }
}

export function checkTipStatus() {
    return function (dispatch) {
        localStorage.getItem('buyList') ?
        dispatch(checkTipStatusType())
            :
        dispatch(checkTipStatusType(styles.noTip))



    }
}
