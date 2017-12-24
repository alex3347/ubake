import React, {Component} from 'react';
import styles from './Header.scss'
import {Link} from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Link to='/SearchResult'>
                    <i className={`iconfont icon-sousuo1 ${styles.left}`}/>
                </Link>
                <div className={styles.title}>
                    市集
                </div>
                <Link to='/Buy'>
                    <i className={`iconfont icon-gouwuche ${styles.right}`}/>
                </Link>
            </div>
        )
    }
}
