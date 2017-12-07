import React, {Component} from 'react'
import Loading from 'components/Loading/Loading';

import styles from './Category.scss'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {getCategory} from "actions/home/category";

class Category extends Component {
    componentDidMount(){
        this.props.getCategory()
    }
    render() {
        const {category, reload, isLoading} = this.props.category;
        return (
            <div className={styles.container}>
                {
                    isLoading ?
                        <Loading reload={reload} request={this.props.getCategory}/>
                        :
                        (
                            category.map((item, index) => {
                            let temp = ['吐司','面包','蛋糕','披萨','提拉米苏','蛋挞','饼干','月饼']
                                return(
                                    <Link to="/HomeDetail" className={styles.item} key={index}>
                                        <img className={styles.bac} src={require('../images/bac'+(index+1)+'.png')}/>
                                        <div className={styles.cover}/>
                                        <div className={styles.detail}>
                                            <div className={styles.title}>{temp[index]}</div>
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
                                    </Link>
                                )
                            })
                        )
                }
            </div>
        )
    }
}

export default connect((state) => ({category: state.category}), {getCategory})(Category);