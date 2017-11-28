import React, {Component} from 'react';
import styles from './Header.scss'


export default class Header extends Component {
    render() {
        return (
            <div className={styles.container}>
                <i className={`iconfont icon-sousuo1 ${styles.left}`}/>
                <div className={styles.title}>
                    市集
                </div>
                <i className={`iconfont icon-gouwuche ${styles.right}`}/>
            </div>
        )
    }
}
