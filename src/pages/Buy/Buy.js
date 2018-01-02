import React, {Component} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const styles = require('./Buy.scss');

import {connect} from 'react-redux';
import {renderList,edit,remove,radioControl,selectAll} from "actions/buy";

class Buy extends Component {
    componentDidMount(){
        this.props.renderList()
    }
    render() {
        const {list,edit,radioList,total} = this.props.buy
        let price = [10,15,20,25,30,35,40]
        return (
            <div>
                <Header editEvent={this.props.edit} list={list} edit={edit} refs={this.refs}/>
                <div className={styles.itemContainer}>
                    {
                        list.map((item, index) => {
                            return(
                                <div className={styles.item} key={index}>
                                    <div className={styles.itemDetail}>
                                        <div className={styles.itemDetailContainer} onClick={()=>{
                                            this.props.radioControl(this.refs[index],this.refs,price[index])
                                        }}>
                                            <div className={styles.itemLeft}>
                                                <input type="radio" name={index} ref={index}/>
                                                <img src={require('./images/item'+(index+1)+'.png')} alt=""/>
                                            </div>
                                            <div className={styles.itemRight}>
                                                <div className={styles.content}>
                                                    <div className={styles.detail}>{item}</div>
                                                    <div className={styles.price}>￥{price[index]}<s>50</s></div>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            edit ?
                                            <div className={styles.delete} onClick={()=>{
                                                this.props.remove(index)
                                            }}>删除</div>
                                            :
                                            null
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.footer}>
                    <div className={styles.left} onClick={()=>{
                        this.props.selectAll(this.refs,price)
                    }}>
                        <input type="radio" ref='selectAll'/>
                        <s>全选</s>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.total}>合计:<i>￥{total}</i></div>
                        <div className={styles.btn}>结算</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect((state) => ({
    buy: state.buy,
}), {renderList,edit,remove,radioControl,selectAll})(Buy);