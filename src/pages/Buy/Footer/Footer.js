import React, {Component} from 'react';
import styles from './Footer.scss'

export default class Footer extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.left}>
                    <input type="radio"/>
                    <s>全选</s>
                </div>
                <div className={styles.right}>
                    <div className={styles.total}>合计:<i>￥0</i></div>
                    <div className={styles.btn}>结算</div>
                </div>
            </div>
        )
    }
}
