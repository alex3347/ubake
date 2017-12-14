import React, {Component} from 'react';
import Header from './Header/Header';
import {Link} from 'react-router-dom';

const styles = require('./Register.scss');

export default class Login extends Component {
    render() {
        return (
            <div className={styles.bac}>
                <Header/>
                <div className={styles.inputContainer}>
                    <div className={styles.item}>
                        <span>手机号</span>
                        <input type="text" placeholder="请输入手机号"/>
                    </div>
                    <div className={styles.item}>
                        <span>验证码</span>
                        <input type="text" placeholder="请输入验证码"/>
                        <i>获取验证码</i>
                    </div>
                    <div className={styles.item}>
                        <span>密码</span>
                        <input type="text" placeholder="请输入6-20位密码"/>
                    </div>
                    <div className={styles.login}>
                        <div>立即注册</div>
                    </div>
                </div>
            </div>
        )
    }
}