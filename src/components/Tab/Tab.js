import React, {Component} from 'react'
import styles from './Tab.scss'
import {Link} from 'react-router-dom';
import {home,market,discover,mine} from 'actions/tab';

import {connect} from 'react-redux';

class Tab extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Link to="/" className={`${styles.link} ${this.props.tab.home}`} onClick={() => this.props.home()}>
                    <i className='iconfont icon-dangaoline'/>
                    <s>首页</s>
                </Link>
                <Link to="/" className={`${styles.link} ${this.props.tab.market}`} onClick={() => this.props.market()}>
                    <i className='iconfont icon-jishi2'/>
                    <s>市集</s>
                </Link>
                <Link to="/" className={styles.link}>
                    <div className={styles.plusBtn}>
                        <i className='iconfont icon-iconjia'/>
                    </div>
                </Link>
                <Link to="/page1" className={`${styles.link} ${this.props.tab.discover}`} onClick={() => this.props.discover()}>
                    <i className='iconfont icon-faxian'/>
                    <s>发现</s>
                </Link>
                <Link to="/" className={`${styles.link} ${this.props.tab.mine}`} onClick={() => this.props.mine()}>
                    <i className='iconfont icon-wode'/>
                    <s>我的</s>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tab: state.tab
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        home: () => {
            dispatch(home())
        },
        market: () => {
            dispatch(market())
        },
        discover: () => {
            dispatch(discover())
        },
        mine: () => {
            dispatch(mine())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tab);