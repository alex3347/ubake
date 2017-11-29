import React, {Component} from 'react'
import styles from './Tab.scss'
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';

class Tab extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Link to="/" className={`${styles.link} ${this.props.tab.home}`}>
                    <i className='iconfont icon-dangaoline'/>
                    <s>首页</s>
                </Link>
                <Link to="/Market" className={`${styles.link} ${this.props.tab.market}`}>
                    <i className='iconfont icon-jishi2'/>
                    <s>市集</s>
                </Link>
                <Link to="/" className={styles.link}>
                    <div className={styles.plusBtn}>
                        <i className='iconfont icon-iconjia'/>
                    </div>
                </Link>
                <Link to="/Discover" className={`${styles.link} ${this.props.tab.discover}`}>
                    <i className='iconfont icon-faxian'/>
                    <s>发现</s>
                </Link>
                <Link to="/Mine" className={`${styles.link} ${this.props.tab.mine}`}>
                    <i className='iconfont icon-wode'/>
                    <s>我的</s>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let name = ownProps.name
    let temp = {
            ...state.tab,
        }
    temp[name] = styles.on
    return {
        tab: temp
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Tab);