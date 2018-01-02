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
                    购物车
                </div>
                {
                    !this.props.list.length ?
                        null
                        :
                        <i className={styles.right} onClick={()=>{
                            this.props.editEvent(this.props.refs)
                        }}>
                            {
                                !this.props.edit ?
                                    '编辑'
                                    :
                                    '完成'
                            }
                        </i>
                }
            </div>
        )
    }
}
