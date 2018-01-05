import React, {Component} from 'react';
import Header from './Header/Header';
import Tab from 'components/Tab/Tab';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {init} from "actions/mine";


const styles = require('./Mine.scss');

class Mine extends Component {
    componentDidMount(){
        this.props.init()
    }
    render() {
        const {logined} = this.props.mine;

        return (
            <div className={styles.bac}>
                <Header logined={logined}/>
                <div className={styles.up}>
                    <div className={styles.container}>
                        <img src={require('./images/bac.png')} alt=""/>
                        {
                            logined ?
                                <div className={styles.content}>
                                    <div className={styles.avatarContainer}>
                                        <img src={require('./images/avatar.png')} alt=""/>
                                    </div>
                                    <div className={styles.name}>里谷粒谷天</div>
                                    <div className={styles.describe}>“这家伙很懒，什么都没写”</div>
                                </div>
                                :
                                <div className={styles.content}>
                                    <div className={styles.avatarContainer}>
                                        <img src={require('./images/noAvatar.png')} alt=""/>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                {
                    logined ?
                        <div className={styles.down}>
                            <div className={styles.itemList}>
                                <Link to='/MineWorks' className={styles.item}>
                                    <div className={styles.num}>1</div>
                                    <div className={styles.name}>作品</div>
                                </Link>
                                <Link to='/MineFocus' className={styles.item}>
                                    <div className={styles.num}>2</div>
                                    <div className={styles.name}>关注</div>
                                </Link>
                                <Link to='/MineFans' className={styles.item}>
                                    <div className={styles.num}>2</div>
                                    <div className={styles.name}>粉丝</div>
                                </Link>
                            </div>
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
                        :
                        <div className={styles.control}>
                            <div className={styles.describe}>登录后，你的作品、关注、粉丝会显示在这里，展示给他人</div>
                            <Link to='/RegisterStepFirst' className={styles.btn} onClick={()=>{}}>
                                <s>注册</s>
                            </Link>
                            <Link to='/Login' className={styles.btn}>
                                <s>登录</s>
                            </Link>
                        </div>
                }
                <Tab name={'mine'}/>
            </div>
        )
    }
}

export default connect((state) => ({
    mine: state.mine
}), {init})(Mine);