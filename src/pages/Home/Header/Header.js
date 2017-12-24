import React, {Component} from 'react';
import styles from './Header.scss'
import {focus} from 'actions/home/header';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';

class Header extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Link to='/SearchResult' className={styles.inputContainer}>
                    <input type="text"  placeholder="搜索食谱" disabled/>
                    <i className='iconfont icon-sousuo'/>
                </Link>
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