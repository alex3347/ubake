import React, {Component} from 'react';
import styles from './Header.scss'


export default class Header extends Component {
    render() {
        return (
            <div className={styles.container}>
                <i className={`iconfont icon-chevron-copy-copy-copy-copy-copy-copy ${styles.left}`}/>
                <div className={styles.title}>
                    购物车
                </div>
                <i className={styles.right}>编辑</i>
            </div>
        )
    }
}
