import React, {Component} from 'react';
import Header from './Header/Header';

import {Link} from 'react-router-dom';

const styles = require('./RegisterStepSec.scss');

export default class RegisterStepSec extends Component {
    render() {
        return (
            <div className={styles.bac}>
                <Header/>
                <div className={styles.inputContainer}>
                    <div className={styles.item}>
                        <span>用户名</span>
                        <input type="text" placeholder="例如：学不可以已"/>
                    </div>
                    <div className={styles.item}>
                        <span>密码</span>
                        <input type="text" placeholder="请输入至少6位字符"/>
                    </div>
                    <div className={styles.item}>
                        <span>确认密码</span>
                        <input type="text" placeholder="请输入至少6位字符"/>
                    </div>
                    <div className={styles.login}>
                        <Link to='/' className={styles.link}>完成</Link>
                    </div>
                </div>
            </div>
        )
    }
}
