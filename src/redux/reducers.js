import {combineReducers} from "redux";

import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';
import tab from 'reducers/tab';
import header from 'reducers/home/header';
import category from 'reducers/home/category';
import master from 'reducers/homeDetail/master';
import list from 'reducers/homeDetail/list';


export default combineReducers({
    counter,
    userInfo,
    tab,
    header,
    category,
    master,
    list
});