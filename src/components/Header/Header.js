import React, {Component} from 'react';
import styles from './Header.scss'
import {change,focus} from 'actions/header';

import {connect} from 'react-redux';

class Header extends Component {
    render() {
        return (
            <div className={styles.container}>
                <i className={`iconfont icon-caidan ${styles.left}`}></i>
                <div className={styles.inputContainer}>
                    <input type="text" value={this.props.header.value} onChange={() => this.props.change()} onFocus={() => this.props.focus()}/>
                    {
                        this.props.header.hasFocus ? null : <i className='iconfont icon-sousuo'></i>
                    }
                </div>
                <i className={`iconfont icon-fanhui ${styles.right}`}></i>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        header: state.header
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        change: () => {
            dispatch(change())
        },
        focus: () => {
            dispatch(focus())
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);