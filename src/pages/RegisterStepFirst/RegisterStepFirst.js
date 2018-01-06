import React, {Component} from 'react';
import Header from './Header/Header';

import {connect} from 'react-redux';
import {interval,submit,init} from "actions/registerStepFirst";

import PropTypes from 'prop-types';

const styles = require('./RegisterStepFirst.scss');

class RegisterStepFirst extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    constructor(props, context) {
        super(props, context);
    }
    componentWillUnmount(){
        this.props.init()
    }
    render() {
        const {timerCount,isFirst,show,phoneNumberTip,verificationCode} = this.props.registerStepFirst;

        return (
            <div className={styles.bac}>
                <Header arg={this.context.router.history.location.arg}/>
                <div className={styles.inputContainer}>
                    <div className={styles.item}>
                        <span>手机号</span>
                        <input ref='phoneNumber' type="text" placeholder="请输入手机号" maxLength='11'/>
                    </div>
                    <div className={styles.item}>
                        <span>验证码</span>
                        <input ref='verificationCode' type="text" placeholder="请输入验证码" maxLength='6'/>
                        <i onClick={() => {
                            this.props.interval(this.refs.phoneNumber)
                        }}>{
                            show ?
                                isFirst ? '获取验证码' : '重新获取'
                                : timerCount + '秒后重新获取'
                        }</i>
                    </div>
                    {
                        !isFirst ? <div className={styles.describe}>我们已经给<i>{this.refs.phoneNumber.value}</i>发了一条短信，里面包含了一个6位数的验证码，请填写在上方验证码处</div> : null

                    }
                    {
                        phoneNumberTip ? <div className={styles.tip}>请输入正确的手机号码</div> : null
                    }
                    {
                        verificationCode ? <div className={styles.tip}>请输入正确的6位验证码</div> : null
                    }
                    <div className={styles.login}>
                        <div className={styles.link} onClick={() => {
                            this.props.submit(this.refs,this.context)
                        }}>下一步</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state) => ({
    registerStepFirst: state.registerStepFirst,
}), {interval,submit,init})(RegisterStepFirst);