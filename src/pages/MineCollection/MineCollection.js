import React, {Component} from 'react';
import Header from './Header/Header';
import {Link} from 'react-router-dom';

const styles = require('./MineCollection.scss');

export default class MineCollection extends Component {
    render() {
        return (
            <div className={styles.bac}>
                <Header/>
                <div className={styles.detailList}>
                    <Link to={{
                        pathname: `/CategoryDetail/1`,
                        state: { name: '蜂蜜奶油小蛋糕' }
                    }} className={styles.item}>
                        <div className={styles.itemLeft}>
                            <img src={require('./images/item1.png')} alt=""/>
                        </div>
                        <div className={styles.itemRight}>
                            <div className={styles.content}>
                                <div className={styles.title}>蜂蜜奶油小蛋糕</div>
                                <div className={styles.detail}>黄油 糖粉 全蛋液 低筋面粉 蜂蜜</div>
                                <div className={styles.from}>来自<i>莎拉布莱曼</i></div>
                            </div>
                            <i className='iconfont icon-jiantou'/>
                        </div>
                    </Link>
                    <Link to={{
                        pathname: `/CategoryDetail/1`,
                        state: { name: '蜂蜜奶油小蛋糕' }
                    }} className={styles.item}>
                        <div className={styles.itemLeft}>
                            <img src={require('./images/item2.png')} alt=""/>
                        </div>
                        <div className={styles.itemRight}>
                            <div className={styles.content}>
                                <div className={styles.title}>肉松泡芙蛋糕</div>
                                <div className={styles.detail}>高筋面粉 肉松 盐 糖 橄榄油</div>
                                <div className={styles.from}>来自<i>苏格拉没有底</i></div>
                            </div>
                            <i className='iconfont icon-jiantou'/>
                        </div>
                    </Link>
                    <Link to={{
                        pathname: `/CategoryDetail/1`,
                        state: { name: '蜂蜜奶油小蛋糕' }
                    }} className={styles.item}>
                        <div className={styles.itemLeft}>
                            <img src={require('./images/item3.png')} alt=""/>
                        </div>
                        <div className={styles.itemRight}>
                            <div className={styles.content}>
                                <div className={styles.title}>抹茶味提拉米苏蛋糕</div>
                                <div className={styles.detail}>巧克力 鸡蛋 牛奶 黄油</div>
                                <div className={styles.from}>来自<i>小丫头骗子</i></div>
                            </div>
                            <i className='iconfont icon-jiantou'/>
                        </div>
                    </Link>
                    <Link to={{
                        pathname: `/CategoryDetail/1`,
                        state: { name: '蜂蜜奶油小蛋糕' }
                    }} className={styles.item}>
                        <div className={styles.itemLeft}>
                            <img src={require('./images/item4.png')} alt=""/>
                        </div>
                        <div className={styles.itemRight}>
                            <div className={styles.content}>
                                <div className={styles.title}>手工DIY生日蛋糕</div>
                                <div className={styles.detail}>黄油 奶油 鸡蛋 高筋面粉 糖</div>
                                <div className={styles.from}>来自<i>巴拉巴拉拉</i></div>
                            </div>
                            <i className='iconfont icon-jiantou'/>
                        </div>
                    </Link>
                </div>
                <Link to='/HomeDetail' className={styles.btn}>
                    <div>收藏更多的菜谱</div>
                </Link>
            </div>
        )
    }
}