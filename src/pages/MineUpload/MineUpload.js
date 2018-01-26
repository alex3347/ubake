import React, {Component} from 'react';
import Header from './Header/Header';

import {connect} from 'react-redux';
import {change,remove} from "actions/mineUpload";

const styles = require('./MineUpload.scss');

class MineUpload extends Component {
    render() {
        const {picList} = this.props.mineUpload
        return (
            <div className={styles.bac}>
                <Header/>
                <div className={styles.up}>
                    <div className={styles.textareaContainer}>
                        <textarea className={styles.textarea} placeholder="说点什么..."/>
                        <div className={styles.picContainer}>
                            <div className={styles.addPic}>
                                <i className='iconfont icon-iconjia'/>
                                <input className={styles.inputFile} type="file" multiple="multiple" ref='inputFile' onChange={()=>{
                                    this.props.change(this.refs.inputFile)
                                }}/>
                            </div>
                            <div className={styles.miniPicContainer}>
                                {
                                    picList.map((item,index)=>{
                                        return(
                                            <img src={item} key={index} alt="" onClick={()=>{
                                                this.props.remove(index)
                                            }}/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles.itemList}>
                        <i className='iconfont icon-jiantou-sanjiao-zuo'/>
                        <div className={styles.itemContainer}>
                            <div className={styles.item}>蛋糕</div>
                            <div className={styles.item}>饼干</div>
                            <div className={styles.item}>面包</div>
                            <div className={styles.item}>披萨</div>
                        </div>
                        <i className='iconfont icon-jiantou'/>
                    </div>
                </div>
                <div className={styles.down}>
                    <div className={styles.title}>同步到:</div>
                    <div className={styles.shareList}>
                        <div className={styles.shareListItem}>
                            <img src={require('./images/share1.png')} alt=""/>
                            <span>朋友圈</span>
                        </div>
                        <div className={styles.shareListItem}>
                            <img src={require('./images/share2.png')} alt=""/>
                            <span>微博</span>
                        </div>
                        <div className={styles.shareListItem}>
                            <img src={require('./images/share3.png')} alt=""/>
                            <span>空间</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state) => ({
    mineUpload: state.mineUpload
}), {change,remove})(MineUpload);