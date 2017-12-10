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
                    {
                        this.props.suggest.map((item, index) => {
                            return(
                                <div className={styles.item} key={index}>
                                    <div className={styles.imgContainer}>
                                        <img src={require('../images/bac'+(index+1)+'.png')} alt=""/>
                                    </div>
                                    <div className={styles.itemTitle}>{item.name}</div>
                                    <div className={styles.itemEvaluate}>{item.grade}%好评</div>
                                    <div className={styles.itemDiscount}>{item.discount}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

