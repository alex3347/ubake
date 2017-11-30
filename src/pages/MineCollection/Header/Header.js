import React, {Component} from 'react';
import styles from './Header.scss'


export default class Header extends Component {
    render() {
        return (
            <div className={styles.container}>
                <i className={`iconfont icon-koba ${styles.left}`}/>
                <div className={styles.title}>
                    我收藏的菜谱
                </div>
                <i className={styles.right}/>
            </div>
        )
    }
}
