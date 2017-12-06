import React, {Component} from 'react';
import Header from './Header/Header';
import DetailList from './DetailList/DetailList';
import Master from './Master/Master';
import Loading from 'components/Loading/Loading';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {request,loadMoreFn} from "actions/homeDetail";


const styles = require('./HomeDetail.scss');

class HomeDetail extends Component {
    componentDidMount(){
        this.props.request();

        const loadMoreFn = this.props.loadMoreFn;
        const wrapper = this.refs.wrapper;
        let timeoutId;

        function callback() {
            const top = wrapper.getBoundingClientRect().top;
            const windowHeight = window.screen.height;
            if(top && top < windowHeight){
                //当wrapper已经被滚动到页面的可视范围之内
                loadMoreFn()
            }
        }

        //控制callback函数的截留
        window.addEventListener('scroll',function () {
            if(this.props.isLoadingMore){
                return;
            }
            if(timeoutId){
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback,50)
        }.bind(this),false)

    }

    render() {
        const {master,list,loading,isLoadingMore} = this.props.homeDetail;

        return (
            loading ?
                <Loading/>
                :
                <div>
                    <Header/>
                    <div className={styles.suggest}>
                        <Link to='/CategoryDetail' className={styles.suggestItem}>
                            <img src={require('./images/bac1.png')} alt=""/>
                            <div className={styles.cover}/>
                            <div className={styles.content}>
                                <div className={styles.iconContainer}>
                                    <i className='iconfont icon-xin'/>
                                </div>
                                <div className={styles.text}>系统分享做法</div>
                            </div>
                        </Link>
                        <Link to='/CategoryDetail' className={styles.suggestItem}>
                            <img src={require('./images/bac2.png')} alt=""/>
                            <div className={styles.cover}/>
                            <div className={styles.content}>
                                <div className={styles.iconContainer}>
                                    <i className='iconfont icon-xin'/>
                                </div>
                                <div className={styles.text}>达人分享做法</div>
                            </div>
                        </Link>
                    </div>
                    <Master master={master}/>
                    <div className={styles.block}/>
                    <DetailList list={list}/>
                    {
                        isLoadingMore ?
                            <div className={styles.loading} ref='wrapper'>
                                加载中...
                            </div>:
                            <DetailList list={list}/>
                    }
                </div>
        )
    }
}

export default connect((state) => ({
    master: state.master,
    homeDetail: state.homeDetail
}), {request,loadMoreFn})(HomeDetail);