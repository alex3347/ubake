export const DISPLAY_CONTROL = "mine/DISPLAY_CONTROL";
export const INIT = "mine/INIT";


function displayControlType() {
    return {
        type: DISPLAY_CONTROL
    }
}

function initType(arg) {
    return {
        type: INIT,
        arg:arg
    }
}

export function displayControl() {
    return function (dispatch) {
        dispatch(displayControlType())
    }
}

export function init(arg) {
    return function (dispatch) {
        dispatch(initType(arg))
    }
}