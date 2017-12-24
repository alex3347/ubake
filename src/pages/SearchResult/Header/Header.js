import React, {Component} from 'react';
import styles from './Header.scss'
import PropTypes from 'prop-types';


export default class Header extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.inputContainer}>
                    <i onClick={() => {this.context.router.history.goBack()}} className={`iconfont icon-chevron-copy-copy-copy-copy-copy-copy ${styles.left}`}/>
                    <input type="text"  placeholder="搜索"/>
                </div>
            </div>
        )
    }
}
