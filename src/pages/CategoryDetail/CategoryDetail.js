import React, {Component} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import {Link,Match} from 'react-router-dom';

const styles = require('./CategoryDetail.scss');

export default class CategoryDetail extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className={styles.detail}>
                    <img src={require('./images/bac.png')}  className={styles.pic} alt=""/>
                    <div className={styles.title}>蛋挞</div>
                    <div className={styles.discribe}>
                        <i>精品{this.props.match.params.id}</i>
                    </div>
                    <div className={styles.evaluate}>
                        <div>8.5综合评分</div>
                        <div>255人赞过</div>
                    </div>
                    <div className={styles.control}>
                        <div className={styles.btn}>
                            <i className='iconfont icon-shoucang'/>
                            <s>收藏</s>
                        </div>
                        <div className={styles.btn}>
                            <i className='iconfont icon-dianzan'/>
                            <s>点赞</s>
                        </div>
                    </div>
                    <div className={styles.list}>
                        <div className={styles.listTitle}>用料</div>
                        <div className={styles.listItem}>
                            <i>冷冻蛋挞皮</i>
                            <s>2个</s>
                        </div>
                        <div className={styles.listItem}>
                            <i>冷冻蛋挞皮</i>
                            <s>2个</s>
                        </div>
                        <div className={styles.listItem}>
                            <i>冷冻蛋挞皮</i>
                            <s>2个</s>
                        </div>
                        <div className={styles.listItem}>
                            <i>冷冻蛋挞皮</i>
                            <s>2个</s>
                        </div>
                    </div>
                    <div className={styles.buy}>
                        <Link to="/Buy" className={styles.btn}>
                            <i className='iconfont icon-gouwuche'/>
                            <s>一键买齐</s>
                        </Link>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}