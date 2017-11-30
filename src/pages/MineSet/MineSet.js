import React, {Component} from 'react';
import Header from './Header/Header';

const styles = require('./MineSet.scss');

export default class MineSet extends Component {
    render() {
        return (
            <div className={styles.bac}>
                <Header/>
                <div className={styles.personal}>
                    <div className={styles.avatarContainer}>
                        <img src={require('./images/avatar.png')} alt=""/>
                    </div>
                    <div className={styles.name}>里谷粒谷天</div>
                    <i className='iconfont icon-jiantou'/>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemName}>账号管理</div>
                    <i className='iconfont icon-jiantou'/>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemName}>设置密码</div>
                    <i className='iconfont icon-jiantou'/>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemName}>收货地址</div>
                    <i className='iconfont icon-jiantou'/>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemName}>发现好友</div>
                    <i className='iconfont icon-jiantou'/>
                </div>
                <div className={`${styles.item} ${styles.special}`}>
                    <div className={styles.itemName}>消息推送</div>
                    <i className='iconfont icon-jiantou'/>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemName}>把U bake推荐给好友</div>
                    <i className='iconfont icon-jiantou'/>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemName}>关于U bake</div>
                    <i className='iconfont icon-jiantou'/>
                </div>
                <div className={styles.btn}>
                    <div>退出登录</div>
                </div>
            </div>
        )
    }
}