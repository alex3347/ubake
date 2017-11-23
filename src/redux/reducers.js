import {combineReducers} from "redux";

import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';
import header from 'reducers/home/header';
import category from 'reducers/home/category';


export default combineReducers({
    counter,
    userInfo,
    header,
    category
});