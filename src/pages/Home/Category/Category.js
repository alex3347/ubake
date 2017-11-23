import React, {Component} from 'react'
import styles from './Category.scss'
import {connect} from 'react-redux';

import {getCategory} from "actions/home/category";

class Category extends Component {
    componentDidMount(){
        this.props.getCategory()
    }
    render() {
        const {category, isLoading, errorMsg} = this.props.category;
        return (
            <div className={styles.container}>
                {
                    isLoading ? '请求信息中......' :
                        (
                            errorMsg ? errorMsg :
                                category.map((item, index) => {
                                    // let num = Math.floor(Math.random()*6 + 1)
                                    return(
                                        <div className={styles.item} key={index}>
                                            <img className={styles.bac} src={require('../images/bac1.png')}/>
                                            <div className={styles.cover}/>
                                            <div className={styles.detail}>
                                                <div className={styles.title}>{item.name}</div>
                                                <div className={styles.content}>
                                                    <div className={styles.like}>
                                                        <i className='iconfont icon-hongxin'/>
                                                        <s>{item.like}人喜欢</s>
                                                    </div>
                                                    <div className={styles.learned}>
                                                        <i className='iconfont icon-tianjialianxiren'/>
                                                        <s>{item.learned}人学过</s>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                        )
                }
            </div>
        )
    }
}

export default connect((state) => ({category: state.category}), {getCategory})(Category);