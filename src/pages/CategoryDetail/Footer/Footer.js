import React, {Component} from 'react';
import styles from './Footer.scss'
import {Link} from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <Link to={this.props.logined ? '/MineUpload' : '/Login'} className={styles.container}>
                <i className='iconfont icon-xiangji'/>
                <s>分享我的这道美食</s>
            </Link>
        )
    }
}
