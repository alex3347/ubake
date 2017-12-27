import {combineReducers} from "redux";

import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';
import tab from 'reducers/tab';
import header from 'reducers/home/header';
import category from 'reducers/home/category';
import homeDetail from 'reducers/homeDetail';
import categoryDetail from 'reducers/categoryDetail';
import market from 'reducers/market';
import discover from 'reducers/discover';
import registerStepFirst from 'reducers/registerStepFirst';


export default combineReducers({
    counter,
    userInfo,
    tab,
    header,
    category,
    homeDetail,
    categoryDetail,
    market,
    discover,
    registerStepFirst
});