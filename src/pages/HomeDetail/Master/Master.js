import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import styles from './Master.scss'

export default class Master extends Component {
    render() {
        return (
            <div className={styles.master}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>推荐达人</div>
                </div>
                <ul className={styles.listContainer}>
                    {
                        this.props.master.map((item, index) => {
                            return(
                                <li className={styles.listItem} key={index}>
                                    <Link to={{
                                        pathname:'/MineWorks',
                                        state:{name:item.name}
                                    }}>
                                        <div className={styles.avatarContainer}>
                                            <img src={require('../images/avatar'+(index+1)+'.png')} alt=""/>
                                        </div>
                                        <div className={styles.name}>{item.name}</div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
