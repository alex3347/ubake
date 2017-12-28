import {CHECK_NAME,CHECK_PWD,CHECK_PWD_SAME,INIT} from 'actions/registerStepSec';


const initState = {
    nameTip:false,
    pwdTip:false,
    pwdSameTip:false,
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case CHECK_NAME:
            return {
                ...state,
                nameTip:true,
                pwdTip:false,
                pwdSameTip:false,
            };
        case CHECK_PWD:
            return {
                ...state,
                nameTip:false,
                pwdTip:true,
                pwdSameTip:false,
            };
        case CHECK_PWD_SAME:
            return {
                ...state,
                nameTip:false,
                pwdTip:true,
                pwdSameTip:true
            };
        case INIT:
            return {
                nameTip:false,
                pwdTip:false,
                pwdSameTip:false
            };
        default:
            return state;
    }
}