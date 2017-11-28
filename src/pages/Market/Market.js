import React, {Component} from 'react';
import Header from './Header/Header';
import Suggest from './Suggest/Suggest';
import List from './List/List';
import Tab from 'components/Tab/Tab';

import styles from './Market.scss'
export default class Market extends Component {
    render() {
        let arg = {name:'market'}
        return (
            <div className={styles.container}>
                <Header/>
                <Suggest/>
                <List/>
                <Tab {...arg}/>
            </div>
        )
    }
}