import React, {Component} from 'react';
import Header from './Header/Header';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {request} from "actions/login";

import PropTypes from 'prop-types';

const styles = require('./Login.scss');

class Login extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const {tip} = this.props.login;
        return (
            <div className={styles.bac}>
                <Header/>
                <div className={styles.inputContainer}>
                    <div className={styles.item}>
                        <span>账号</span>
                        <input ref='name' type="text" placeholder="用户名/手机号"/>
                    </div>
                    <div className={styles.item}>
                        <span>密码</span>
                        <input ref='pwd' type="password" placeholder="请输入密码"/>
                    </div>
                    {
                        tip ? <div className={styles.tip}>请输入正确的用户名和密码</div> : null
                    }
                    <div className={styles.login} onClick={()=>{
                        this.props.request(this.refs,this.context)
                    }}>
                        <div>登录</div>
                    </div>
                </div>
                <div className={styles.others}>
                    <Link to={{
                        pathname:"/RegisterStepFirst",
                        arg:'/FindPwdStepSec'
                        }} className={styles.left}>忘记密码</Link>
                    <Link to={{
                        pathname:"/RegisterStepFirst",
                        arg:'/RegisterStepSec'
                    }} className={styles.right}>立即注册</Link>
                </div>
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
                            <img src={require('./images/item3.png')} alt=""/>
                            <span>QQ登录</span>
                        </div>
                        <div className={styles.btn}>
                            <img src={require('./images/item2.png')} alt=""/>
                            <span>微博登录</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state) => ({
    login: state.login
}), {request})(Login);