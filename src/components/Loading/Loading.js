import React, {Component} from 'react';
import styles from './Loading.scss'

export default class Loading extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.iconContainer}>
                    <i className='iconfont icon-jiazaizhong'/>
                </div>
                <div className={styles.info}>
                    加载中...
                </div>
            </div>
        )
    }
}