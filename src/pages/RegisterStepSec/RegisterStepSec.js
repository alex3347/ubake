import React, {Component} from 'react';
import Header from './Header/Header';

import {connect} from 'react-redux';
import {submit} from "actions/registerStepSec";

import PropTypes from 'prop-types';

const styles = require('./RegisterStepSec.scss');

class RegisterStepSec extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const {nameTip,pwdTip,pwdSameTip} = this.props.registerStepSec;

        return (
            <div className={styles.bac}>
                <Header/>
                <div className={styles.inputContainer}>
                    <div className={styles.item}>
                        <span>用户名</span>
                        <input ref='name' type="text" placeholder="请输入4-16位字符"/>
                    </div>
                    <div className={styles.item}>
                        <span>密码</span>
                        <input ref='pwd' type="text" placeholder="请输入至少6位字符"/>
                    </div>
                    <div className={styles.item}>
                        <span>确认密码</span>
                        <input ref='pwdEnsure' type="text" placeholder="请输入至少6位字符"/>
                    </div>
                    {
                        nameTip ? <div className={styles.tip}>请输入4-16位字母，数字，下划线，减号组成的用户名</div> : null
                    }
                    {
                        pwdTip ? <div className={styles.tip}>请输入6-20个字母、数字、下划线组成的密码</div> : null
                    }
                    {
                        pwdSameTip ? <div className={styles.tip}>两次密码不相同</div> : null
                    }
                    <div className={styles.login}>
                        <div className={styles.link} onClick={() => {
                            this.props.submit(this.refs,this.context)
                        }}>完成</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state) => ({
    registerStepSec: state.registerStepSec,
}), {submit})(RegisterStepSec);