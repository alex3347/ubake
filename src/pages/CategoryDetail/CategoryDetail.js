import React, {Component} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Loading from 'components/Loading/Loading';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {request,collect,support,toLocalStorage,login} from "actions/categoryDetail";

const styles = require('./CategoryDetail.scss');

class CategoryDetail extends Component {
    componentDidMount(){
        const arg = this.props.match.params.id;
        this.props.request(arg);
        this.props.login();
    }
    render() {
        const {categoryDetail,reload,loading,collected,supported,logined} = this.props.categoryDetail;
        return (
            loading ?
                <Loading reload={reload} request={this.props.request}/>
                :
                <div>
                    <Header/>
                    <div className={styles.detail}>
                        <img src={require('./images/bac.png')}  className={styles.pic} alt=""/>
                        <div className={styles.title}>{this.props.location.state ? this.props.location.state.name : '蜂蜜奶油小蛋糕'}</div>
                        {
                            !categoryDetail.boutique ? null :
                            <div className={styles.discribe}>
                                <i>精品</i>
                            </div>
                        }
                        <div className={styles.evaluate}>
                            <div>{categoryDetail.score}综合评分</div>
                            <div>{categoryDetail.praise}人赞过</div>
                        </div>
                        <div className={styles.control}>
                            <div className={styles.btn} onClick={()=>{this.props.collect()}}>
                                {
                                    collected ?
                                    <div className={styles.clicked}>
                                        <i className='iconfont icon-shoucang'/>
                                        <s>已收藏</s>
                                    </div>
                                    :
                                    <div className={styles.unclick}>
                                        <i className='iconfont icon-shoucang'/>
                                        <s>收藏</s>
                                    </div>
                                }
                            </div>
                            <div className={styles.btn} onClick={()=>{this.props.support()}}>
                                {
                                    supported ?
                                        <div className={styles.clicked}>
                                            <i className='iconfont icon-dianzan'/>
                                            <s>已点赞</s>
                                        </div>
                                        :
                                        <div className={styles.unclick}>
                                            <i className='iconfont icon-dianzan'/>
                                            <s>点赞</s>
                                        </div>
                                }
                            </div>
                        </div>
                        <div className={styles.list}>
                            <div className={styles.listTitle}>用料</div>
                            {
                                categoryDetail.list.map((item, index) => {
                                    return(
                                        <div className={styles.listItem} key={index}>
                                            <i>{item.name}</i>
                                            <s>{item.need}</s>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={styles.buy}>
                            <Link to='/Buy' className={styles.btn} onClick={()=>{
                                this.props.toLocalStorage()
                            }}>
                                <i className='iconfont icon-gouwuche'/>
                                <s>一键买齐</s>
                            </Link>
                        </div>
                    </div>
                    <Footer logined={logined}/>
                </div>
        )
    }
}

export default connect((state) => ({
    categoryDetail: state.categoryDetail,
}), {request,collect,support,toLocalStorage,login})(CategoryDetail);