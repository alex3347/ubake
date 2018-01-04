export const COLLECTED = "buy/COLLECTED";
export const CHECK_CLICKED = "buy/CHECK_CLICKED";

function collectedType() {
    return {
        type: COLLECTED
    }
}

function checkClickedType() {
    return {
        type: CHECK_CLICKED
    }
}
export function toLocalstorage() {
    return function (dispatch,getState) {

        let localStorageBuyList = localStorage.getItem('buyList')

        if(getState().marketListDetail.collected){

            let list = JSON.parse(localStorageBuyList)
            list.pop()

            localStorage.setItem('buyList',JSON.stringify(list));
        }else{
            if(localStorageBuyList){

                let list = JSON.parse(localStorageBuyList)
                //mock数据 没有实际内容
                list.push({
                    "name": "冷冻蛋挞皮",
                    "need": "2个",
                    "price": "10"
                })

                localStorage.setItem('buyList',JSON.stringify(list));

            }else{
                localStorage.setItem('buyList',JSON.stringify([{
                    "name": "冷冻蛋挞皮",
                    "need": "2个",
                    "price": "10"
                }]));
            }
        }

        dispatch(collectedType())

    }
}

export function checkClicked() {
    return function (dispatch) {

        dispatch(checkClickedType())

    }
}