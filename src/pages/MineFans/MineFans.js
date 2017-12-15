import React, {Component} from 'react';
import Header from './Header/Header';


import styles from './MineFans.scss'

export default class MineFans extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Header/>
                <div className={styles.content}>
                    <div className={styles.item}>
                        <div className={styles.left}>
                            <div className={styles.imgContainer}>
                                <img src={require('./images/avatar1.png')} alt=""/>
                            </div>
                            <div className={styles.contentContainer}>
                                <div className={styles.name}>拉不拉卡君</div>
                                <div className={styles.describe}>唯有美食与爱不可辜负</div>
                            </div>
                        </div>
                        <div className={styles.right}>关注</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.left}>
                            <div className={styles.imgContainer}>
                                <img src={require('./images/avatar2.png')} alt=""/>
                            </div>
                            <div className={styles.contentContainer}>
                                <div className={styles.name}>拉不拉卡君</div>
                                <div className={styles.describe}>唯有美食与爱不可辜负</div>
                            </div>
                        </div>
                        <div className={styles.right}>关注</div>
                    </div>
                </div>
            </div>
        )
    }
}
