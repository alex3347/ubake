import React, {Component} from 'react'
import styles from './Tab.scss'
import {Link} from 'react-router-dom';

export default class Category extends Component {
    render() {
        // var current = {};
        // current[home] = 'on';
        return (
            <div className={styles.container}>
                <Link to="/" className={styles.link}>
                    <i className='iconfont icon-dangaoline'/>
                    <s>首页</s>
                </Link>
                <Link to="/" className={styles.link}>
                    <i className='iconfont icon-jishi2'/>
                    <s>市集</s>
                </Link>
                <Link to="/" className={styles.link}>
                    <div className={styles.plusBtn}>
                        <i className='iconfont icon-iconjia'/>
                    </div>
                </Link>
                <Link to="/page1" className={styles.link}>
                    <i className='iconfont icon-faxian'/>
                    <s>发现</s>
                </Link>
                <Link to="/" className={styles.link}>
                    <i className='iconfont icon-wode'/>
                    <s>我的</s>
                </Link>
            </div>
        )
    }
}
