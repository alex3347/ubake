import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import styles from './DetailList.scss'

export default class DetailList extends Component {
    render() {
        return (
            <div className={styles.detailList}>
                {
                    this.props.list.map((item, index) => {
                        return(
                            <Link to={{
                                pathname: `/CategoryDetail/${item.id}`,
                                state: { name: item.name }
                            }} className={styles.item} key={index}>
                                <div className={styles.itemLeft}>
                                    <img src={require('../images/item'+(index+1)+'.png')} alt=""/>
                                    <div className={styles.tip}>
                                        <img src={require('../images/tip.png')} alt=""/>
                                        <div><i>{parseInt(item.score)}</i><s>.{item.score.toString().split('.')[1]}</s></div>
                                    </div>
                                </div>
                                <div className={styles.itemRight}>
                                    <div className={styles.content}>
                                        <div className={styles.title}>{item.name}</div>
                                        <div className={styles.detail}>{item.material}</div>
                                        <div className={styles.from}>来自<i>{item.maker}</i></div>
                                    </div>
                                    <div className={styles.btn}>戳进去</div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}
