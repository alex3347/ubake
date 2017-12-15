import React, {Component} from 'react';
import Header from './Header/Header';

const styles = require('./SearchResult.scss');

export default class SearchResult extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className={styles.title}>热门搜索</div>
                <div className={styles.hotContainer}>
                    <div className={styles.hot}>披萨</div>
                    <div className={styles.hot}>蛋糕</div>
                    <div className={styles.hot}>甜饼</div>
                    <div className={styles.hot}>蛋挞</div>
                </div>
            </div>
        )
    }
}