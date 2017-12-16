import React, {Component} from 'react';
import styles from './Footer.scss'

export default class Footer extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.left}>
                    <i className='iconfont icon-Collection-wx3'/>
                    <div>收藏</div>
                </div>
                <div className={styles.right}>立即购买</div>
                <div className={styles.middle}>加入购物车</div>
            </div>
        )
    }
}
