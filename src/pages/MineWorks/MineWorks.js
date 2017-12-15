import React, {Component} from 'react';
import Header from './Header/Header';


import styles from './MineWorks.scss'

export default class MineWorks extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Header/>
                <div className={styles.content}>
                    <div className={styles.item}>
                        <div className={styles.up}>
                            <div className={styles.imgContainer}>
                                <img src={require('./images/avatar1.png')} alt=""/>
                            </div>
                            <div className={styles.contentContainer}>
                                <div className={styles.name}>这是名字</div>
                                <div className={styles.time}>11-27</div>
                            </div>
                        </div>
                        <div className={styles.down}>
                            <div className={styles.describe}><i>#暂定#</i>唯有美食与爱不可辜负</div>
                            <div className={styles.product}>
                                <img src={require('./images/product1.png')} alt=""/>
                                <img src={require('./images/product2.png')} alt=""/>
                                <img src={require('./images/product3.png')} alt=""/>
                            </div>
                            <div className={styles.btnContainer}>
                                <div className={styles.btn}>
                                    <i className='iconfont icon-zhuanfa'/>
                                    <s>转发</s>
                                </div>
                                <div className={styles.btn}>
                                    <i className='iconfont icon-pinglun1'/>
                                    <s>评论</s>
                                </div>
                                <div className={styles.btn}>
                                    <i className='iconfont icon-dianzan'/>
                                    <s>点赞</s>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
