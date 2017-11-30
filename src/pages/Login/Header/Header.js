import React, {Component} from 'react';
import styles from './Header.scss'


export default class Header extends Component {
    render() {
        return (
            <div className={styles.container}>
                <i className={`iconfont icon-koba ${styles.left}`}/>
                <div className={styles.title}>
                    用户登录
                </div>
                <i className={styles.right}/>
            </div>
        )
    }
}
