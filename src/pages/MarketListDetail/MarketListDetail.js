import React, {Component} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import styles from './MarketListDetail.scss'

import {connect} from 'react-redux';
import {toLocalstorage} from "actions/marketListDetail";

class MarketListDetail extends Component {

    render() {
        const {collected} = this.props.marketListDetail
        return (
                <div className={styles.container}>
                    <Header/>
                    <div className={styles.banner}>
                        <img src={require('./images/temp.png')} alt=""/>
                    </div>
                    <div className={styles.describe}>
                        <div className={styles.up}>澳洲新西兰原装进口牛奶全脂牛奶整箱纯牛奶新装450ml*12</div>
                        <div className={styles.down}>
                            <div className={styles.price}>￥265</div>
                            <div className={styles.sold}>月销2000</div>
                        </div>
                    </div>
                    <div className={styles.itemContainer}>
                        <div className={styles.item}>
                            <div className={styles.itemName}>产品参数</div>
                            <i className='iconfont icon-jiantou'/>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.itemName}>配送至:松江区</div>
                            <i className='iconfont icon-jiantou'/>
                        </div>
                    </div>
                    <div className={styles.contentContainer}>
                        <div className={styles.title}>图文详情</div>
                        <div className={styles.content}>
                            <img src={require('./images/contentTemp.png')} alt=""/>
                        </div>
                    </div>
                    <Footer collected={collected} toLocalstorage={this.props.toLocalstorage}/>
                </div>
        )
    }
}


export default connect((state) => ({
    marketListDetail: state.marketListDetail,
}), {toLocalstorage})(MarketListDetail);