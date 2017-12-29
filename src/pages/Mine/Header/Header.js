import React, {Component} from 'react';
import styles from './Header.scss'
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className={styles.container}>
                {
                    this.props.logined ?
                    <Link to="/MineUpload" className={`iconfont icon-tj ${styles.left}`}/>
                    :
                    <i className={`iconfont icon-koba ${styles.left}`}/>
                }
                <div className={styles.title}>
                    我的
                </div>
                {
                    this.props.logined ?
                        <Link to="/MineSet" className={`iconfont icon-shezhi ${styles.right}`}/>
                        :
                        <i className={`iconfont icon-koba ${styles.right}`}/>
                }
            </div>
        )
    }
}
