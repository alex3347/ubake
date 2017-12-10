import React, {Component} from 'react';
import Header from './Header/Header';
import Suggest from './Suggest/Suggest';
import List from './List/List';
import Tab from 'components/Tab/Tab';
import Loading from 'components/Loading/Loading';


import {connect} from 'react-redux';

import {request,requestCategory} from "actions/market";

import styles from './Market.scss'

class Market extends Component {
    componentDidMount(){
        this.props.request();
    }
    render() {
        const {suggest,category,reload,loading,categoryReload,categoryLoading} = this.props.market;

        let arg = {name:'market'}
        return (
            loading ?
                <Loading reload={reload} request={this.props.request}/>
                :
                <div className={styles.container}>
                    <Header/>
                    <Suggest suggest={suggest}/>
                    <List category={category} requestCategory={this.props.requestCategory} categoryReload={categoryReload} categoryLoading={categoryLoading}/>
                    <Tab {...arg}/>
                </div>
        )
    }
}

export default connect((state) => ({
    market: state.market,
}), {request,requestCategory})(Market);