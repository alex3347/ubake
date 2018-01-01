import React, {Component} from 'react';
import styles from './Footer.scss'
import {Link} from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <Link to='/MineUpload' className={styles.container}>
                <i className='iconfont icon-xiangji'/>
                <s>分享我的这道美食
                    {/*<input type="file" />*/}
                </s>
            </Link>
        )
    }
}
