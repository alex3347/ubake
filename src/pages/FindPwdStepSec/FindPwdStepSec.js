import React, {Component} from 'react';
import Header from './Header/Header';

import {connect} from 'react-redux';
import {submit} from "actions/FindPwdStepSec";

import PropTypes from 'prop-types';

const styles = require('./FindPwdStepSec.scss');

class FindPwdStepSec extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const {pwdTip,pwdSameTip} = this.props.FindPwdStepSec;

        return (
            <div className={styles.bac}>
                <Header/>
                <div className={styles.inputContainer}>
                    <div className={styles.item}>
                        <span>新密码</span>
                        <input ref='pwd' type="password" placeholder="请输入至少6位字符"/>
                    </div>
                    <div className={styles.item}>
                        <span>确认密码</span>
                        <input ref='pwdEnsure' type="password" placeholder="请输入至少6位字符"/>
                    </div>
                    {
                        pwdTip ? <div className={styles.tip}>请输入6-16位, 数字, 字母, 字符至少包含两种, 同时不能包含中文和空格的密码</div> : null
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
    FindPwdStepSec: state.FindPwdStepSec,
}), {submit})(FindPwdStepSec);