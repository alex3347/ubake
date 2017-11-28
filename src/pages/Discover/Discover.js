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
                            <div className={styles.time}>刚刚发表</div>
                            <div className={styles.describe}><i>#首届厨艺大赛#</i>自己做的芒果蛋糕、披萨和榴莲月饼，做的不好请大家多多包涵，希望各位朋友多多点赞，随便帮我点一下上次发的参赛作品，谢谢大家了！</div>
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
                    <div className={styles.item}>
                        <div className={styles.imgContainer}>
                            <img src={require('./images/avatar2.png')} alt=""/>
                        </div>
                        <div className={styles.detail}>
                            <div className={styles.title}>樱桃小丸子</div>
                            <div className={styles.time}>刚刚发表</div>
                            <div className={styles.describe}><i>#下午茶#</i>受台风影响，今儿个算是凉快了。午睡过后，来点下午茶，准备一些自己亲手做的小点心，外加一杯卡布奇诺，吹吹小风，这日子真惬意....</div>
                            <div className={styles.product}>
                                <img src={require('./images/product4.png')} alt=""/>
                                <img src={require('./images/product5.png')} alt=""/>
                                <img src={require('./images/product6.png')} alt=""/>
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