import React, {Component} from 'react';
import Header from './Header/Header';
import {Link} from 'react-router-dom';

const styles = require('./FindPwd.scss');

export default class Login extends Component {
    render() {
        return (
            <div className={styles.bac}>
                <Header/>
                <div className={styles.inputContainer}>
                    <div className={styles.item}>
                        <span>账号</span>
                        <input type="text" placeholder="用户名/手机号"/>
                    </div>
                    <div className={styles.describe}>请输入152****8377收到的短信验证码：</div>
                    <div className={styles.item}>
                        <span>验证码</span>
                        <input type="text" placeholder="请输入验证码"/>
                        <i>获取验证码</i>
                        <i>重新发送(118s)</i>
                    </div>
                    <div className={styles.login}>
                        <div>下一步</div>
                    </div>
                </div>
            </div>
        )
    }
}