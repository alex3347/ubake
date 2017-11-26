import React, {Component} from 'react';
import styles from './Header.scss'


export default class Header extends Component {
    render() {
        return (
            <div className={styles.container}>
                <i className={`iconfont icon-fenxiang ${styles.left}`}/>
                <div className={styles.title}>
                    食谱
                </div>
                <i className={`iconfont icon-cailanzi ${styles.right}`}/>
            </div>
        )
    }
}
