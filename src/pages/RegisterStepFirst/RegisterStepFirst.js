import React, {Component} from 'react';
import Header from './Header/Header';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {interval} from "actions/registerStepFirst";

const styles = require('./RegisterStepFirst.scss');

class RegisterStepFirst extends Component {
    render() {
        const {timerCount,show,init} = this.props.registerStepFirst;

        return (
            <div className={styles.bac}>
                <Header/>
                <div className={styles.inputContainer}>
                    <div className={styles.item}>
                        <span>手机号</span>
                        <input type="text" placeholder="请输入手机号" maxLength='10'/>
                    </div>
                    <div className={styles.item}>
                        <span>验证码</span>
                        <input type="text" placeholder="请输入验证码" maxLength='6'/>
                        <i onClick={this.props.interval}>{
                            show ?
                                init ? '获取验证码' : '重新获取'
                                : timerCount + '秒后重新获取'
                        }</i>
                    </div>
                    <div className={styles.describe}>我们已经给<i>123****1234</i>发了一条短信，里面包含了一个6位数的验证码，请填写在上方验证码处</div>
                    <div className={styles.login}>
                        <Link to='/registerStepSec' className={styles.link}>下一步</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state) => ({
    registerStepFirst: state.registerStepFirst,
}), {interval})(RegisterStepFirst);