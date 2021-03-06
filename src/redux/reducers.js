import {combineReducers} from "redux";

import tab from 'reducers/tab';
import header from 'reducers/home/header';
import category from 'reducers/home/category';
import homeDetail from 'reducers/homeDetail';
import categoryDetail from 'reducers/categoryDetail';
import market from 'reducers/market';
import discover from 'reducers/discover';
import registerStepFirst from 'reducers/registerStepFirst';
import registerStepSec from 'reducers/registerStepSec';
import FindPwdStepSec from 'reducers/FindPwdStepSec';
import login from 'reducers/login';
import mine from 'reducers/mine';
import buy from 'reducers/buy';
import marketListDetail from 'reducers/marketListDetail';
import mineUpload from 'reducers/mineUpload';


export default combineReducers({
    tab,
    header,
    category,
    homeDetail,
    categoryDetail,
    market,
    discover,
    registerStepFirst,
    registerStepSec,
    FindPwdStepSec,
    login,
    mine,
    buy,
    marketListDetail,
    mineUpload
});