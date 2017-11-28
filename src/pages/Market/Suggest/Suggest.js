import React, {Component} from 'react'
import styles from './Suggest.scss'


export default class Suggest extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.title}>
                    <i className='iconfont icon-star'/>
                    <s>店铺推荐</s>
                </div>
                <div className={styles.content}>
                    <div className={styles.item}>
                        <div className={styles.imgContainer}>
                            <img src={require('../images/bac1.png')} alt=""/>
                        </div>
                        <div className={styles.itemTitle}>笑脸烘培屋</div>
                        <div className={styles.itemEvaluate}>100%好评</div>
                        <div className={styles.itemDiscount}>全店满40减5</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.imgContainer}>
                            <img src={require('../images/bac2.png')} alt=""/>
                        </div>
                        <div className={styles.itemTitle}>幸福烘焙屋</div>
                        <div className={styles.itemEvaluate}>100%好评</div>
                        <div className={styles.itemDiscount}>本店大酬宾</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.imgContainer}>
                            <img src={require('../images/bac3.png')} alt=""/>
                        </div>
                        <div className={styles.itemTitle}>乐志佳烘焙屋</div>
                        <div className={styles.itemEvaluate}>100%好评</div>
                        <div className={styles.itemDiscount}>买就送 我任性</div>
                    </div>
                </div>
            </div>
        )
    }
}

