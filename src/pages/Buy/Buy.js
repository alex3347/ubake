import React, {Component} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const styles = require('./Buy.scss');

export default class Buy extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className={styles.itemContainer}>
                    <div className={styles.item}>
                        <div className={styles.itemDetail}>
                            <div className={styles.itemLeft}>
                                <input type="radio"/>
                                <img src={require('./images/item1.png')} alt=""/>
                            </div>
                            <div className={styles.itemRight}>
                                <div className={styles.content}>
                                    <div className={styles.detail}>舒克曼  威士宝黄油200g</div>
                                    <div className={styles.price}>￥16.8<s>20.5</s></div>
                                </div>
                                <div className={styles.delete}>删除</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemDetail}>
                            <div className={styles.itemLeft}>
                                <input type="radio"/>
                                <img src={require('./images/item2.png')} alt=""/>
                            </div>
                            <div className={styles.itemRight}>
                                <div className={styles.content}>
                                    <div className={styles.detail}>舒克曼  威士宝黄油200g</div>
                                    <div className={styles.price}>￥16.8<s>20.5</s></div>
                                </div>
                                <div className={styles.delete}>删除</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemDetail}>
                            <div className={styles.itemLeft}>
                                <input type="radio"/>
                                <img src={require('./images/item3.png')} alt=""/>
                            </div>
                            <div className={styles.itemRight}>
                                <div className={styles.content}>
                                    <div className={styles.detail}>舒克曼  威士宝黄油200g</div>
                                    <div className={styles.price}>￥16.8<s>20.5</s></div>
                                </div>
                                <div className={styles.delete}>删除</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemDetail}>
                            <div className={styles.itemLeft}>
                                <input type="radio"/>
                                <img src={require('./images/item4.png')} alt=""/>
                            </div>
                            <div className={styles.itemRight}>
                                <div className={styles.content}>
                                    <div className={styles.detail}>舒克曼  威士宝黄油200g</div>
                                    <div className={styles.price}>￥16.8<s>20.5</s></div>
                                </div>
                                <div className={styles.delete}>删除</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}