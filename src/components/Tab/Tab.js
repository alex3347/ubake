import React, {Component} from 'react'
import styles from './Tab.scss'
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {displayControl,init} from "actions/tab";

class Tab extends Component {
    componentDidMount(){
        this.props.init(this.props.name)
    }
    render() {
        const {home, market, discover, mine, active} = this.props.tab;
        return (
            <div className={styles.container}>
                <Link to="/" className={`${styles.link} ${home}`}>
                    <i className='iconfont icon-dangaoline'/>
                    <s>首页</s>
                </Link>
                <Link to="/Market" className={`${styles.link} ${market}`}>
                    <i className='iconfont icon-jishi2'/>
                    <s>市集</s>
                </Link>
                <div className={styles.link} onClick={()=>{
                    this.props.displayControl()
                }}>
                    <div className={styles.plusBtn}>
                        <i className='iconfont icon-iconjia'/>
                    </div>
                </div>
                <Link to="/Discover" className={`${styles.link} ${discover}`}>
                    <i className='iconfont icon-faxian'/>
                    <s>发现</s>
                </Link>
                <Link to="/Mine" className={`${styles.link} ${mine}`}>
                    {
                        mine ?
                        <i className='iconfont icon-wode-jiechuzhuangtai'/>
                        :
                        <i className='iconfont icon-wodetouxiang'/>
                    }
                    <s>我的</s>
                </Link>
                <div className={styles.addBtnContainer} style = {active ? {'display': 'block'}:{'display': 'none'}}>
                    <div className={styles.shadow} onClick={()=>{
                        this.props.displayControl()
                    }}/>
                    <Link to="/Discover" className={`${styles.addBtn} ${styles.addBtn1}`}>
                        <div className={styles.iconContainer}>
                            <i className='iconfont icon-faxian'/>
                        </div>
                        <div className={styles.title}>去发现</div>
                        <div className={styles.describe}>看看大家分享的美食</div>
                    </Link>
                    <Link to="/Market" className={`${styles.addBtn} ${styles.addBtn2}`}>
                        <div className={styles.iconContainer}>
                            <i className='iconfont icon-jishi2'/>
                        </div>
                        <div className={styles.title}>逛市集</div>
                        <div className={styles.describe}>写点烘焙用品和工具</div>
                    </Link>
                    <Link to="/MineUpload" className={`${styles.addBtn} ${styles.addBtn3}`}>
                        <div className={styles.iconContainer}>
                            <i className='iconfont icon-05'/>
                        </div>
                        <div className={styles.title}>发动态</div>
                        <div className={styles.describe}>晒美食、晒生活</div>
                    </Link>
                    <div className={styles.closeBtn} onClick={()=>{
                        this.props.displayControl()
                    }}>
                        <i className='iconfont icon-cross'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => (
        {tab: state.tab}
    ), {displayControl,init})(Tab);