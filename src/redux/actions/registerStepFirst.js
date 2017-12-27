export const FIRST_CLICK = "registerStepFirst/FIRST_CLICK";
export const TRY_AGAIN = "registerStepFirst/TRY_AGAIN";
export const TIME_CONTROL = "registerStepFirst/TIME_CONTROL";

function firstClick() {
    return {
        type: FIRST_CLICK
    }
}

function tryAgain() {
    return {
        type: TRY_AGAIN,
    }
}


function timeControl() {
    return {
        type: TIME_CONTROL
    }
}

//发送短信倒数
export function interval() {
    return function (dispatch,getState) {
        if(getState().registerStepFirst.isFirst){
            dispatch(firstClick());

            let temp = setInterval(() =>{
                let state = getState().registerStepFirst;

                if(state.timerCount===1){
                    temp&&clearInterval(temp);
                    dispatch(tryAgain());
                }else{
                    dispatch(timeControl());
                }
            },1000);
        }
    }
}

