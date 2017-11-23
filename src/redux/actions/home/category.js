export const GET_CATEGORY_REQUEST = "category/GET_CATEGORY_REQUEST";
export const GET_CATEGORY_SUCCESS = "category/GET_CATEGORY_SUCCESS";
export const GET_CATEGORY_FAIL = "category/GET_CATEGORY_FAIL";

function getCategoryRequest() {
    return {
        type: GET_CATEGORY_REQUEST
    }
}

function getCategorySuccess(category) {
    return {
        type: GET_CATEGORY_SUCCESS,
        category: category
    }
}

function getCategoryFail() {
    return {
        type: GET_CATEGORY_FAIL
    }
}

export function getCategory() {
    return function (dispatch) {
        dispatch(getCategoryRequest());

        return fetch('http://rap2api.taobao.org/app/mock/342/api/home/category')
            .then((response => {
                return response.json()
            }))
            .then((json) => {
                    dispatch(getCategorySuccess(json))
                }
            ).catch(
                () => {
                    dispatch(getCategoryFail());
                }
            )
    }
}