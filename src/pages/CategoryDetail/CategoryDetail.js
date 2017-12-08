import React, {Component} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Loading from 'components/Loading/Loading';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {request} from "actions/categoryDetail";

const styles = require('./CategoryDetail.scss');

class CategoryDetail extends Component {
    componentDidMount(){
        const arg = this.props.match.params.id;
        this.props.request(arg);
    }
    render() {
        const {categoryDetail,reload,loading} = this.props.categoryDetail;
        return (
            loading ?
                <Loading reload={reload} request={this.props.request}/>
                :
                <div>
                    <Header/>
                    <div className={styles.detail}>
                        <img src={require('./images/bac.png')}  className={styles.pic} alt=""/>
                        <div className={styles.title}>{this.props.location.state.name}</div>
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
                            <div className={styles.btn}>
                                <i className='iconfont icon-shoucang'/>
                                <s>收藏</s>
                            </div>
                            <div className={styles.btn}>
                                <i className='iconfont icon-dianzan'/>
                                <s>点赞</s>
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
                            <Link to="/Buy" className={styles.btn}>
                                <i className='iconfont icon-gouwuche'/>
                                <s>一键买齐</s>
                            </Link>
                        </div>
                    </div>
                    <Footer/>
                </div>
        )
    }
}

export default connect((state) => ({
    categoryDetail: state.categoryDetail,
}), {request})(CategoryDetail);