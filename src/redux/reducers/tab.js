import {DISPLAY_CONTROL,INIT} from 'actions/tab';
import styles from 'components/Tab/Tab.scss'

const initState = {
    home:'',
    market:'',
    discover:'',
    mine:'',
    active: false
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
                [action.arg]: styles.on
            };
        default:
            return state
    }
}