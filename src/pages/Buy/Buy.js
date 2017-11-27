import React, {Component} from 'react';
import Header from './Header/Header';

const styles = require('./Buy.scss');

export default class Buy extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className={styles.location}>
                    <span>所在地区</span>
                    <div>
                        <span>上海市</span>
                        <i className='iconfont icon-arrow-bottom'/>
                    </div>
                </div>
                <img className={styles.pic} src={require('./images/bac.png')} alt=""/>
                <div className={styles.itemContainer}>
                    <div className={styles.item}>
                        <div className={styles.itemTitle}>黄油/300g</div>
                        <div className={styles.itemDetail}>
                            <img className={styles.itemLeft} src={require('./images/item1.png')} alt=""/>
                            <div className={styles.itemRight}>
                                <div className={styles.content}>
                                    <div className={styles.detail}>舒克曼  威士宝黄油200g</div>
                                    <div className={styles.price}>￥16.8<s>20.5</s></div>
                                </div>
                                <i className='iconfont icon-gouwuche'/>
                            </div>
                        </div>
                        <div className={styles.similar}>
                            <span>其他类似商品</span>
                            <i className='iconfont icon-arrow-bottom'/>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemTitle}>黄油/300g</div>
                        <div className={styles.itemDetail}>
                            <img className={styles.itemLeft} src={require('./images/item1.png')} alt=""/>
                            <div className={styles.itemRight}>
                                <div className={styles.content}>
                                    <div className={styles.detail}>舒克曼  威士宝黄油200g</div>
                                    <div className={styles.price}>￥16.8<s>20.5</s></div>
                                </div>
                                <i className='iconfont icon-gouwuche'/>
                            </div>
                        </div>
                        <div className={styles.similar}>
                            <span>其他类似商品</span>
                            <i className='iconfont icon-arrow-bottom'/>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemTitle}>黄油/300g</div>
                        <div className={styles.itemDetail}>
                            <img className={styles.itemLeft} src={require('./images/item1.png')} alt=""/>
                            <div className={styles.itemRight}>
                                <div className={styles.content}>
                                    <div className={styles.detail}>舒克曼  威士宝黄油200g</div>
                                    <div className={styles.price}>￥16.8<s>20.5</s></div>
                                </div>
                                <i className='iconfont icon-gouwuche'/>
                            </div>
                        </div>
                        <div className={styles.similar}>
                            <span>其他类似商品</span>
                            <i className='iconfont icon-arrow-bottom'/>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemTitle}>黄油/300g</div>
                        <div className={styles.itemDetail}>
                            <img className={styles.itemLeft} src={require('./images/item1.png')} alt=""/>
                            <div className={styles.itemRight}>
                                <div className={styles.content}>
                                    <div className={styles.detail}>舒克曼  威士宝黄油200g</div>
                                    <div className={styles.price}>￥16.8<s>20.5</s></div>
                                </div>
                                <i className='iconfont icon-gouwuche'/>
                            </div>
                        </div>
                        <div className={styles.similar}>
                            <span>其他类似商品</span>
                            <i className='iconfont icon-arrow-bottom'/>
                        </div>
                    </div>
                </div>
                <div className={styles.block}/>
                <div className={styles.btnContainer}>
                    <div className={styles.btn}>
                        结算
                    </div>
                </div>
            </div>
        )
    }
}