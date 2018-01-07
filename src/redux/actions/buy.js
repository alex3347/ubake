export const RENDER_LIST = "buy/RENDER_LIST";
export const EDIT = "buy/EDIT";
export const REMOVE = "buy/REMOVE";
export const RADIO_CONTROL = "buy/RADIO_CONTROL";
export const SELECT_ALL = "buy/SELECT_ALL";
export const UNSELECT_ALL = "buy/UNSELECT_ALL";
export const CALC = "buy/CALC";
export const CALC_ALL = "buy/CALC_ALL";



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

function radioControlType(arg) {
    return {
        type: RADIO_CONTROL,
        arg:arg
    }
}

function selectAllType(arg) {
    return {
        type: SELECT_ALL,
        arg:arg
    }
}

function unSelectAllType() {
    return {
        type: UNSELECT_ALL,
    }
}

function calcType(arg) {
    return {
        type: CALC,
        arg:arg
    }
}

function calcAllType(arg) {
    return {
        type: CALC_ALL,
        arg:arg
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

export function edit(refs) {
    return function (dispatch,getState) {
        let tempRadioList = getState().buy.radioList
        for(let key in refs){
            tempRadioList[key] = false
            refs[key].checked = false
        }
        dispatch(editType())
        dispatch(radioControlType(tempRadioList))

    }
}

export function remove(index) {
    return function (dispatch,getState) {
        //修改本地存储目录
        let list = getState().buy.list
        list.splice(index,1)
        let newList = list
        dispatch(removeType(newList))

        localStorage.setItem('buyList',JSON.stringify(newList));

        //修改radio控制顺序，因为index发生变化
        let radioList = getState().buy.radioList
        radioList.splice(index,1)
        let newRadioList = radioList

    }
}

export function radioControl(ref,refs,price) {
    return function (dispatch,getState) {

        //修改点击事件对应radioList数组中的值
        let radioListTemp = getState().buy.radioList
        radioListTemp[ref.name] = !radioListTemp[ref.name]
        ref.checked = radioListTemp[ref.name]


        dispatch(radioControlType(radioListTemp))


        //根据上一步中的状态改变总价
        price = parseInt(price)
        radioListTemp[ref.name] ? null : (price = -price)

        dispatch(calcType(price))



        //如果copyRadioList数组中有任意一个为false，即未全选
        if(radioListTemp.every(function (value) {
                return value
            })){
            radioListTemp['selectAll'] = true
            dispatch(selectAllType(radioListTemp))
            refs.selectAll.checked = true
        }else{
            radioListTemp['selectAll'] = false
            dispatch(unSelectAllType())
            refs.selectAll.checked = false
        }

    }
}

export function selectAll(refs) {
    return function (dispatch,getState) {

        let radioListTemp = getState().buy.radioList

        if(!getState().buy.selectAll){
            for(let key in refs){
                radioListTemp[key] = true
                refs[key].checked = true
            }
            //计算所有商品价格总和
            let list = getState().buy.list

            let total = list.reduce(function (pre,cur) {
                return pre + parseInt(cur.price)
            },parseInt(list[0].price))

            total = total - parseInt(list[0].price)

            dispatch(calcAllType(total))
        }else{
            for(let key in refs){
                radioListTemp[key] = false
                refs[key].checked = false
            }
            dispatch(calcAllType())
        }

        dispatch(selectAllType(radioListTemp))
    }
}