import {HOME, MARKET, DISCOVER, MINE} from '../actions/tab';
import styles from 'components/Tab/Tab.scss'
/*
* 初始化state
 */

const initState = {
    home:styles.on,
    market:'',
    discover:'',
    mine:''
};
/*
* reducer
 */
export default function reducer(state = initState, action) {
    switch (action.type) {
        case HOME:
            return {
                home:styles.on,
                market:'',
                discover:'',
                mine:''
            };
        case MARKET:
            return {
                home:'',
                market:styles.on,
                discover:'',
                mine:''
            };
        case DISCOVER:
            return {
                home:'',
                market:'',
                discover:styles.on,
                mine:''
            };
        case MINE:
            return {
                home:'',
                market:'',
                discover:'',
                mine:styles.on
            };
        default:
            return state
    }
}