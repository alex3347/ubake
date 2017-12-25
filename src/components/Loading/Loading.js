import React, {Component} from 'react';
import styles from './Loading.scss'

export default class Loading extends Component {
    render() {
        return (
                this.props.reload ?
                <div className={styles.container}>
                    <div className={styles.iconContainer}>
                        <i className={`iconfont icon-jiazaizhong ${styles.reload}`} onClick={this.props.request}/>
                    </div>
                    <div className={styles.info}>请检查网络后重试</div>
                </div>
                :
                <div className={styles.container}>
                    <div className={styles.iconContainer}>
                        <i className={`iconfont icon-jiazaizhong ${styles.loading}`}/>
                    </div>
                    <div className={styles.info}>加载中...</div>
                </div>

        )
    }
}