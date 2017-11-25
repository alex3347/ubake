import {combineReducers} from "redux";

import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';
import tab from 'reducers/tab';
import header from 'reducers/home/header';
import category from 'reducers/home/category';


export default combineReducers({
    counter,
    userInfo,
    tab,
    header,
    category
});