import React, {Component} from 'react';
import Header from './Header/Header';
import Suggest from './Suggest/Suggest';
import List from './List/List';
import Tab from 'components/Tab/Tab';
import Loading from 'components/Loading/Loading';


import {connect} from 'react-redux';

import {request,requestCategory,checkTipStatus} from "actions/market";

import styles from './Market.scss'

class Market extends Component {
    componentDidMount(){
        this.props.request()
        this.props.checkTipStatus()
    }
    render() {
        const {tipStatus,suggest,category,reload,loading,categoryReload,categoryLoading} = this.props.market;

        return (
            loading ?
                <Loading reload={reload} request={this.props.request}/>
                :
                <div className={styles.container}>
                    <Header tipStatus={tipStatus}/>
                    <Suggest suggest={suggest}/>
                    <List category={category} requestCategory={this.props.requestCategory} categoryReload={categoryReload} categoryLoading={categoryLoading}/>
                    <Tab name={'market'}/>
                </div>
        )
    }
}

export default connect((state) => ({
    market: state.market,
}), {request,requestCategory,checkTipStatus})(Market);