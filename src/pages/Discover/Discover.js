import React, {Component} from 'react';
import Header from './Header/Header';
import Tab from 'components/Tab/Tab';

import styles from './Discover.scss'
export default class Discover extends Component {
    render() {
        let arg = {name:'discover'}
        return (
            <div className={styles.container}>
                <Header/>
                <div className={styles.content}>
                    <div className={styles.tab}>
                        <div className={styles.btnContainer}>
                            <div className={styles.on}>圈子</div>
                        </div>
                        <div className={styles.btnContainer}>
                            <div>关注</div>
                        </div>
                    </div>
                    <div className={styles.swiper}/>
                    <div className={styles.item}>
                        <div className={styles.imgContainer}>
                            <img src={require('./images/avatar1.png')} alt=""/>
                        </div>
                        <div className={styles.detail}>
                            <div className={styles.title}>巴拉巴拉拉</div>
                            <div className={styles.time}>巴拉巴拉拉</div>
                            <div className={styles.describe}>巴拉巴拉拉</div>
                            <div className={styles.product}>
                                <img src={require('./images/product1.png')} alt=""/>
                                <img src={require('./images/product2.png')} alt=""/>
                                <img src={require('./images/product3.png')} alt=""/>
                            </div>
                            <div className={styles.bottom}>
                                <div className={styles.left}>来自 OPPO x6</div>
                                <div className={styles.right}>
                                    <div className={styles.comment}>
                                        <i className='iconfont icon-pinglun'/>
                                        <s>3</s>
                                    </div>
                                    <div className={styles.good}>
                                        <i className='iconfont icon-dianzan'/>
                                        <s>16</s>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Tab {...arg}/>
            </div>
        )
    }
}