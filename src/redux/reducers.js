import {combineReducers} from "redux";

import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';
import header from 'reducers/home/header';


export default combineReducers({
    counter,
    userInfo,
    header
});