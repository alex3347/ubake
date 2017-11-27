import React, {Component} from 'react';
import Header from './Header/Header';
import {Link} from 'react-router-dom';

const styles = require('./HomeDetail.scss');

export default class HomeDetail extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className={styles.suggest}>
                    <div className={styles.suggestItem}>
                        <img src={require('./images/bac1.png')} alt=""/>
                        <div className={styles.cover}/>
                        <div className={styles.content}>
                            <div className={styles.iconContainer}>
                                <i className={`iconfont icon-xin ${styles.icon}`}/>
                            </div>
                            <div className={styles.text}>系统分享做法</div>
                        </div>
                    </div>
                    <div className={styles.suggestItem}>
                        <img src={require('./images/bac2.png')} alt=""/>
                        <div className={styles.cover}/>
                        <div className={styles.content}>
                            <div className={styles.iconContainer}>
                                <i className={`iconfont icon-xin ${styles.icon}`}/>
                            </div>
                            <div className={styles.text}>达人分享做法</div>
                        </div>
                    </div>
                </div>
                <div className={styles.master}>
                    <div className={styles.titleContainer}>
                        <div className={styles.title}>推荐达人</div>
                    </div>
                    <ul className={styles.listContainer}>
                        <li className={styles.listItem}>
                            <div className={styles.avatarContainer}>
                                <img src={require('./images/avatar1.png')} alt=""/>
                            </div>
                            <div className={styles.name}>小爱酱~</div>
                        </li>
                        <li className={styles.listItem}>
                            <div className={styles.avatarContainer}>
                                <img src={require('./images/avatar2.png')} alt=""/>
                            </div>
                            <div className={styles.name}>虎虎虎爷</div>
                        </li>
                        <li className={styles.listItem}>
                            <div className={styles.avatarContainer}>
                                <img src={require('./images/avatar3.png')} alt=""/>
                            </div>
                            <div className={styles.name}>小丸子君</div>
                        </li>
                        <li className={styles.listItem}>
                            <div className={styles.avatarContainer}>
                                <img src={require('./images/avatar4.png')} alt=""/>
                            </div>
                            <div className={styles.name}>梅格妮妮</div>
                        </li>
                    </ul>
                </div>
                <div className={styles.block}/>
                <div className={styles.detailList}>
                    <Link to="/CategoryDetail" className={styles.item}>
                        <div className={styles.itemLeft}>
                            <img src={require('./images/item1.png')} alt=""/>
                            <div className={styles.tip}>
                                <img src={require('./images/tip.png')} alt=""/>
                                <div><i>8</i><s>.5</s></div>
                            </div>
                        </div>
                        <div className={styles.itemRight}>
                            <div className={styles.content}>
                                <div className={styles.title}>蜂蜜奶油小蛋糕</div>
                                <div className={styles.detail}>黄油 糖粉 全蛋液 低筋面粉 蜂蜜</div>
                                <div className={styles.from}>来自<i>莎拉布莱曼</i></div>
                            </div>
                            <div className={styles.btn}>戳进去</div>
                        </div>
                    </Link>
                    <Link to="/CategoryDetail" className={styles.item}>
                        <div className={styles.itemLeft}>
                            <img src={require('./images/item2.png')} alt=""/>
                            <div className={styles.tip}>
                                <img src={require('./images/tip.png')} alt=""/>
                                <div><i>7</i><s>.5</s></div>
                            </div>
                        </div>
                        <div className={styles.itemRight}>
                            <div className={styles.content}>
                                <div className={styles.title}>肉松泡芙蛋糕</div>
                                <div className={styles.detail}>高筋面粉 肉松 盐 糖 橄榄油</div>
                                <div className={styles.from}>来自<i>苏格拉没有底</i></div>
                            </div>
                            <div className={styles.btn}>戳进去</div>
                        </div>
                    </Link>
                    <Link to="/CategoryDetail" className={styles.item}>
                        <div className={styles.itemLeft}>
                            <img src={require('./images/item3.png')} alt=""/>
                            <div className={styles.tip}>
                                <img src={require('./images/tip.png')} alt=""/>
                                <div><i>9</i><s>.1</s></div>
                            </div>
                        </div>
                        <div className={styles.itemRight}>
                            <div className={styles.content}>
                                <div className={styles.title}>抹茶味提拉米苏蛋糕</div>
                                <div className={styles.detail}>巧克力 鸡蛋 牛奶 黄油</div>
                                <div className={styles.from}>来自<i>小丫头骗子</i></div>
                            </div>
                            <div className={styles.btn}>戳进去</div>
                        </div>
                    </Link>
                    <Link to="/CategoryDetail" className={styles.item}>
                        <div className={styles.itemLeft}>
                            <img src={require('./images/item4.png')} alt=""/>
                            <div className={styles.tip}>
                                <img src={require('./images/tip.png')} alt=""/>
                                <div><i>7</i><s>.9</s></div>
                            </div>
                        </div>
                        <div className={styles.itemRight}>
                            <div className={styles.content}>
                                <div className={styles.title}>手工DIY生日蛋糕</div>
                                <div className={styles.detail}>黄油 奶油 鸡蛋 高筋面粉 糖</div>
                                <div className={styles.from}>来自<i>巴拉巴拉拉</i></div>
                            </div>
                            <div className={styles.btn}>戳进去</div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}