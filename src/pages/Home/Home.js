import React, {Component} from 'react';
import Header from './Header/Header';
import Category from './Category/Category';
import Tab from 'components/Tab/Tab';

const styles = require('./Home.scss');

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Category/>
                <Tab/>
            </div>
        )
    }
}