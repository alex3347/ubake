export const RENDER_LIST = "buy/RENDER_LIST";
export const EDIT = "buy/EDIT";
export const REMOVE = "buy/REMOVE";
export const RADIO_CONTROL = "buy/RADIO_CONTROL";



function renderListType(arg) {
    return {
        type: RENDER_LIST,
        arg:arg
    }
}

function editType() {
    return {
        type: EDIT
    }
}

function removeType(arg) {
    return {
        type: REMOVE,
        arg:arg
    }
}

function radioControlType() {
    return {
        type: RADIO_CONTROL,
    }
}

export function renderList() {
    return function (dispatch) {
        let localStorageBuyList = localStorage.getItem('buyList')
        localStorageBuyList ?
            dispatch(renderListType(JSON.parse(localStorageBuyList)))
            :
            dispatch(renderListType())

    }
}

export function edit() {
    return function (dispatch) {

        dispatch(editType())

    }
}

export function remove(index) {
    return function (dispatch,getState) {
        let list = getState().buy.list
        list.splice(index,1)
        let newList = list
        dispatch(removeType(newList))

        localStorage.setItem('buyList',JSON.stringify(newList));
    }
}

export function radioControl(index) {
    return function (dispatch,getState) {
        getState().buy.radioList[index] = true
        console.log(getState().buy.radioList)
        // dispatch(radioControlType())
    }
}