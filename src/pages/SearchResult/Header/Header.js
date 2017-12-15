import React, {Component} from 'react';
import styles from './Header.scss'


export default class Header extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.inputContainer}>
                    <i className={`iconfont icon-chevron-copy-copy-copy-copy-copy-copy ${styles.left}`}/>
                    <input type="text"  placeholder="搜索"/>
                </div>
            </div>
        )
    }
}
