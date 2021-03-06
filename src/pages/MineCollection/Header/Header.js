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
                <i onClick={() => {this.context.router.history.goBack()}} className={`iconfont icon-chevron-copy-copy-copy-copy-copy-copy ${styles.left}`}/>
                <div className={styles.title}>
                    我收藏的菜谱
                </div>
                <i className={styles.right}/>
            </div>
        )
    }
}
