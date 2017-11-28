import React, {Component} from 'react'
import styles from './List.scss'


export default class List extends Component {

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.tab}>
                    <div className={styles.on}>乳制品</div>
                    <div>烘培工具</div>
                    <div>模具</div>
                    <div>辅料</div>
                    <div>烘焙包装</div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.item}>
                        <img className={styles.itemLeft} src={require('../images/item1.png')} alt=""/>
                        <div className={styles.itemRight}>
                            <div className={styles.up}>澳洲新西兰原装进口牛奶全脂牛奶整箱纯牛奶450ml*12</div>
                            <div className={styles.middle}>￥265</div>
                            <div className={styles.down}>
                                <div className={styles.downLeft}>2600人购买</div>
                                <div className={styles.downRight}>
                                    <i className='iconfont icon-gouwuche'/>
                                    <div className={styles.btn}>立即购买</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.itemLeft} src={require('../images/item1.png')} alt=""/>
                        <div className={styles.itemRight}>
                            <div className={styles.up}>澳洲新西兰原装进口牛奶全脂牛奶整箱纯牛奶450ml*12</div>
                            <div className={styles.middle}>￥265</div>
                            <div className={styles.down}>
                                <div className={styles.downLeft}>2600人购买</div>
                                <div className={styles.downRight}>
                                    <i className='iconfont icon-gouwuche'/>
                                    <div className={styles.btn}>立即购买</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.itemLeft} src={require('../images/item1.png')} alt=""/>
                        <div className={styles.itemRight}>
                            <div className={styles.up}>澳洲新西兰原装进口牛奶全脂牛奶整箱纯牛奶450ml*12</div>
                            <div className={styles.middle}>￥265</div>
                            <div className={styles.down}>
                                <div className={styles.downLeft}>2600人购买</div>
                                <div className={styles.downRight}>
                                    <i className='iconfont icon-gouwuche'/>
                                    <div className={styles.btn}>立即购买</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

