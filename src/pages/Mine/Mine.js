import React, {Component} from 'react';
import Header from './Header/Header';
import Tab from 'components/Tab/Tab';
import {Link} from 'react-router-dom';

const styles = require('./Mine.scss');

export default class Home extends Component {
    render() {
        let arg = {name:'mine'}

        return (
            <div className={styles.bac}>
                <Header/>
                <div className={styles.up}>
                    <div className={styles.container}>
                        <img src={require('./images/bac.png')} alt=""/>
                        <div className={styles.content}>
                            <div className={styles.avatarContainer}>
                                <img src={require('./images/avatar.png')} alt=""/>
                            </div>
                            <div className={styles.name}>里谷粒谷天</div>
                            <div className={styles.describe}>“这家伙很懒，什么都没写”</div>
                        </div>
                    </div>
                    <div className={styles.itemList}>
                        <Link to='/MineWorks' className={styles.item}>
                            <div className={styles.num}>3</div>
                            <div className={styles.name}>作品</div>
                        </Link>
                        <Link to='/MineFocus' className={styles.item}>
                            <div className={styles.num}>5</div>
                            <div className={styles.name}>关注</div>
                        </Link>
                        <Link to='/MineFans' className={styles.item}>
                            <div className={styles.num}>5</div>
                            <div className={styles.name}>粉丝</div>
                        </Link>
                    </div>
                </div>
                <div className={styles.down}>
                    <div className={styles.downItem}>
                        <div className={styles.downItemName}>
                            <i className='iconfont icon-dingdan'/>
                            <div>我的订单</div>
                        </div>
                        <i className='iconfont icon-jiantou'/>
                    </div>
                    <Link to='/MineCollection' className={styles.downItem}>
                        <div className={styles.downItemName}>
                            <i className='iconfont icon-Collection-wx3'/>
                            <div>我的收藏</div>
                        </div>
                        <i className='iconfont icon-jiantou'/>
                    </Link>
                    <div className={styles.downItem}>
                        <div className={styles.downItemName}>
                            <i className='iconfont icon-youhui'/>
                            <div>优惠券</div>
                        </div>
                        <i className='iconfont icon-jiantou'/>
                    </div>
                    <div className={styles.downItem}>
                        <div className={styles.downItemName}>
                            <i className='iconfont icon-kefu'/>
                            <div>客服中心</div>
                        </div>
                        <i className='iconfont icon-jiantou'/>
                    </div>
                </div>
                <Tab {...arg}/>
            </div>
        )
    }
}