import React, {Component} from 'react';
import styles from './Footer.scss'

export default class Footer extends Component {
    render() {
        return (
            <div className={styles.container}>
                {
                    this.props.clicked ?
                        <div className={styles.left} onClick={()=>{
                            this.props.checkClicked()
                        }}>
                            <i className={`iconfont icon-Collection-wx3 ${styles.clicked}`}/>
                            <div className={styles.clicked}>已收藏</div>
                        </div>
                        :
                        <div className={styles.left} onClick={()=>{
                            this.props.checkClicked()
                        }}>
                            <i className='iconfont icon-Collection-wx3'/>
                            <div>收藏</div>
                        </div>
                }
                <div className={styles.right}>立即购买</div>
                <div className={styles.middle} onClick={()=>{
                    this.props.toLocalstorage()
                }}>
                    {
                        this.props.collected ?
                        '已加入购物车'
                        :
                        '加入购物车'
                    }
                </div>
            </div>
        )
    }
}
