import {DISPLAY_CONTROL,INIT,LOGINED_IN,LOGINED_OUT} from 'actions/tab';
import styles from 'components/Tab/Tab.scss'

const initState = {
    home:'',
    market:'',
    discover:'',
    mine:'',
    active: false,
    logined:false,
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case DISPLAY_CONTROL:
            return {
                ...state,
                active: !state.active
            };
        case INIT:
            return {
                ...state,
                home:'',
                market:'',
                discover:'',
                mine:'',
                active: false,
                [action.arg]: styles.on
            };
        case LOGINED_IN:
            return {
                ...state,
                logined:true
            };
        case LOGINED_OUT:
            return {
                ...state,
                logined:false
            };
        default:
            return state
    }
}