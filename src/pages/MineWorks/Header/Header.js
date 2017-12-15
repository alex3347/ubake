import React, {Component} from 'react';
import styles from './Header.scss'


export default class Header extends Component {
    render() {
        return (
            <div className={styles.container}>
                <i className={`iconfont icon-chevron-copy-copy-copy-copy-copy-copy ${styles.left}`}/>
                <div className={styles.title}>
                    我的作品
                </div>
                <i className={`iconfont icon-koba ${styles.right}`}/>
            </div>
        )
    }
}
