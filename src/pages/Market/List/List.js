import React, {Component} from 'react'
import styles from './List.scss'
import Loading from 'components/Loading/Loading';


export default class List extends Component {

    render() {
        const click = ()=>{
            this.props.requestCategory()
        }
        return (
            <div className={styles.container}>
                <div className={styles.tab}>
                    <div className={styles.on} onClick={click}>乳制品</div>
                    <div onClick={click}>烘培工具</div>
                    <div onClick={click}>模具</div>
                    <div onClick={click}>辅料</div>
                    <div onClick={click}>烘焙包装</div>
                </div>
                <div className={styles.itemContainer}>
                    {
                        this.props.categoryLoading ?
                            <Loading reload={this.props.categoryReload} request={this.props.requestCategory}/>
                            :
                            this.props.category.map((item, index) => {
                                return (
                                    <div className={styles.item} key={index}>
                                        <img className={styles.itemLeft}
                                             src={require('../images/item' + ((index + 1) % 2 ? 2 : 1) + '.png')}
                                             alt=""/>
                                        <div className={styles.itemRight}>
                                            <div className={styles.up}>{item.name}</div>
                                            <div className={styles.middle}>￥{item.price}</div>
                                            <div className={styles.down}>
                                                <div className={styles.downLeft}>{item.sold}人购买</div>
                                                <div className={styles.downRight}>
                                                    <i className='iconfont icon-gouwuche'/>
                                                    <div className={styles.btn}>立即购买</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
        )
    }
}

