import React, {Component} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const styles = require('./Buy.scss');

import {connect} from 'react-redux';
import {renderList,edit,remove,radioControl} from "actions/buy";

class Buy extends Component {
    componentDidMount(){
        this.props.renderList()
    }
    render() {
        const {list,edit,radioList} = this.props.buy
        return (
            <div>
                <Header editEvent={this.props.edit} list={list} edit={edit}/>
                <div className={styles.itemContainer}>
                    {
                        list.map((item, index) => {
                            return(
                                <div className={styles.item} key={index}>
                                    <div className={styles.itemDetail}>
                                        <div className={styles.itemDetailContainer} onClick={()=>{
                                            this.props.radioControl(index)
                                        }}>
                                            <div className={styles.itemLeft}>
                                                <input type="radio" checked={radioList[index]}/>
                                                <img src={require('./images/item'+(index+1)+'.png')} alt=""/>
                                            </div>
                                            <div className={styles.itemRight}>
                                                <div className={styles.content}>
                                                    <div className={styles.detail}>{item}</div>
                                                    <div className={styles.price}>￥15<s>20</s></div>
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
                <Footer/>
            </div>
        )
    }
}


export default connect((state) => ({
    buy: state.buy,
}), {renderList,edit,remove,radioControl})(Buy);