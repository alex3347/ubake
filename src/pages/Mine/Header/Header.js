import React, {Component} from 'react';
import styles from './Header.scss'
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className={styles.container}>
                <i className={`iconfont icon-tianjialianxiren ${styles.left}`}/>
                <div className={styles.title}>
                    我的
                </div>
                <Link to="/MineSet" className={`iconfont icon-shezhi ${styles.right}`}/>
            </div>
        )
    }
}