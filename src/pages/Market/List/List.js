import React, {Component} from 'react'
import styles from './List.scss'
import Loading from 'components/Loading/Loading';


export default class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            active: '0'
        }
    }

    render() {
        const click = (e)=>{
            this.setState({active: e.target.getAttribute("mark")})
            this.props.requestCategory()
        }
        return (
            <div className={styles.container}>
                <div className={styles.tab}>
                    {
                        ['乳制品','烘培工具','模具','辅料','烘焙包装'].map((item, index)=>{
                            return (
                                <div onClick={click}
                                     key={index}
                                     mark={index}
                                     style = {(index == this.state.active) ? {'borderBottomColor': '#f4ab1e','color': '#f4ab1e'}:null}>
                                    {item}
                                </div>
                            )
                        })
                    }
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
                                            <div className={styles.down}>
                                                <div className={styles.downLeft}>
                                                    <div className={styles.price}>￥{item.price}</div>
                                                    <div className={styles.sold}>{item.sold}人购买</div>
                                                </div>
                                                <div className={styles.downRight}>
                                                    <i className='iconfont icon-gouwuche'/>
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

