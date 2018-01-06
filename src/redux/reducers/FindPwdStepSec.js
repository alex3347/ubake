import {CHECK_PWD,CHECK_PWD_SAME,INIT} from 'actions/FindPwdStepSec';


const initState = {
    pwdTip:false,
    pwdSameTip:false,
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case CHECK_PWD:
            return {
                ...state,
                pwdTip:true,
                pwdSameTip:false,
            };
        case CHECK_PWD_SAME:
            return {
                ...state,
                pwdTip:true,
                pwdSameTip:true
            };
        case INIT:
            return {
                pwdTip:false,
                pwdSameTip:false
            };
        default:
            return state;
    }
}