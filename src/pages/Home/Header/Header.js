import React, {Component} from 'react';
import styles from './Header.scss'
import {focus} from 'actions/home/header';

import {connect} from 'react-redux';

class Header extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.inputContainer}>
                    <input type="text"  placeholder="搜索食谱" onFocus={() => this.props.focus()}/>
                    {
                        this.props.header.hasFocus ? null : <i className='iconfont icon-sousuo'/>
                    }
                </div>
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
        focus: () => {
            dispatch(focus())
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);