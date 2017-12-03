import React, {Component} from 'react';
import Header from './Header/Header';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {getMaster} from "actions/homeDetail/master";
import {getList} from "actions/homeDetail/list";


const styles = require('./HomeDetail.scss');

class HomeDetail extends Component {
    componentDidMount(){
        this.props.getMaster();
        this.props.getList();
    }
    render() {
        const {master} = this.props.master;
        const {list} = this.props.list;
        return (
            <div>
                <Header/>
                <div className={styles.suggest}>
                    <Link to='/CategoryDetail' className={styles.suggestItem}>
                        <img src={require('./images/bac1.png')} alt=""/>
                        <div className={styles.cover}/>
                        <div className={styles.content}>
                            <div className={styles.iconContainer}>
                                <i className={`iconfont icon-xin ${styles.icon}`}/>
                            </div>
                            <div className={styles.text}>系统分享做法</div>
                        </div>
                    </Link>
                    <Link to='/CategoryDetail' className={styles.suggestItem}>
                        <img src={require('./images/bac2.png')} alt=""/>
                        <div className={styles.cover}/>
                        <div className={styles.content}>
                            <div className={styles.iconContainer}>
                                <i className={`iconfont icon-xin ${styles.icon}`}/>
                            </div>
                            <div className={styles.text}>达人分享做法</div>
                        </div>
                    </Link>
                </div>
                <div className={styles.master}>
                    <div className={styles.titleContainer}>
                        <div className={styles.title}>推荐达人</div>
                    </div>
                    <ul className={styles.listContainer}>
                        {
                            master.map((item, index) => {
                                return(
                                    <li className={styles.listItem} key={index}>
                                        <div className={styles.avatarContainer}>
                                            <img src={require('./images/avatar'+(index+1)+'.png')} alt=""/>
                                        </div>
                                        <div className={styles.name}>{item.name}</div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={styles.block}/>
                <div className={styles.detailList}>
                    {
                        list.map((item, index) => {
                            return(
                                <Link to="/CategoryDetail" className={styles.item} key={index}>
                                    <div className={styles.itemLeft}>
                                        <img src={require('./images/item'+(index+1)+'.png')} alt=""/>
                                        <div className={styles.tip}>
                                            <img src={require('./images/tip.png')} alt=""/>
                                            <div><i>{parseInt(item.score)}</i><s>.{item.score.toString().split('.')[1]}</s></div>
                                        </div>
                                    </div>
                                    <div className={styles.itemRight}>
                                        <div className={styles.content}>
                                            <div className={styles.title}>{item.name}</div>
                                            <div className={styles.detail}>{item.material}</div>
                                            <div className={styles.from}>来自<i>{item.maker}</i></div>
                                        </div>
                                        <div className={styles.btn}>戳进去</div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default connect((state) => ({
    master: state.master,
    list: state.list
}), {getMaster,getList})(HomeDetail);