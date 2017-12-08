import React, {Component} from 'react';
import styles from './Footer.scss'

export default class Footer extends Component {
    render() {
        return (
            <div className={styles.container}>
                <i className='iconfont icon-xiangji'/>
                <s>分享我的这道美食
                    <input type="file" />
                </s>
            </div>
        )
    }
}
