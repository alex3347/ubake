import {RENDER_LIST,EDIT,REMOVE,RADIO_CONTROL,SELECT_ALL,UNSELECT_ALL,CALC,CALC_ALL} from 'actions/buy';


const initState = {
    list:[],
    edit:false,
    radioList:[],//保存点击状态，选中为true，否则为false
    selectAll:false,//全选按钮状态
    total:0//总价
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case RENDER_LIST:
            let list = action.arg ? action.arg : []
            let array = []
            for(let i=0; i<list.length; i++){
                array.push(false)
            }
            return {
                ...state,
                list:list,
                radioList:array
            };
        case EDIT:
            return {
                ...state,
                edit:!state.edit,
                total:0
            };
        case REMOVE:
            return {
                ...state,
                list:action.arg
            };
        case RADIO_CONTROL:
            return {
                ...state,
                radioList:action.arg
            };
        case SELECT_ALL:
            return {
                ...state,
                radioList:action.arg,
                selectAll:!state.selectAll
            };
        case UNSELECT_ALL:
            return {
                ...state,
                selectAll:false
            };
        case CALC:
            return {
                ...state,
                total:state.total + action.arg
            };
        case CALC_ALL:
            return {
                ...state,
                total:(action.arg ? action.arg : 0)
            };
        default:
            return state;
    }
}