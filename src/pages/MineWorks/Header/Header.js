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
                    {
                        !this.props.pageNameControl ?
                            '我的作品'
                            :
                            'ta的动态'

                    }
                </div>
                <i className={`iconfont icon-koba ${styles.right}`}/>
            </div>
        )
    }
}
