import React, {Component} from 'react';
import Header from './Header/Header';
import {Link} from 'react-router-dom';

const styles = require('./Login.scss');

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
                    <div className={styles.item}>
                        <span>密码</span>
                        <input type="text" placeholder="请输入密码"/>
                    </div>
                    <div className={styles.btn}>
                        <div>登录</div>
                    </div>
                </div>
                <div className={styles.describe}>登录后可以同步菜谱、收藏夹和交厨友</div>
                <div className={styles.otherLogin}>
                    <div className={styles.titleContainer}>
                        <div className={styles.title}>第三方登录</div>
                    </div>
                    <div className={styles.btnContainer}>
                        <div className={styles.btn}>
                            <img src={require('./images/item1.png')} alt=""/>
                            <span>微信登录</span>
                        </div>
                        <div className={styles.btn}>
                            <img src={require('./images/item2.png')} alt=""/>
                            <span>QQ登录</span>
                        </div>
                        <div className={styles.btn}>
                            <img src={require('./images/item3.png')} alt=""/>
                            <span>微博登录</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}