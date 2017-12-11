import React, {Component} from 'react';
import Header from './Header/Header';
import Tab from 'components/Tab/Tab';
import {Link} from 'react-router-dom';

const styles = require('./Mine.scss');

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            active: '0'
        }
    }
    render() {
        let arg = {name:'mine'}

        const click = (e)=>{
            this.setState({active: e.target.getAttribute("mark")})
            // this.props.request()
        }

        return (
            <div className={styles.bac}>
                <Header/>
                <div className={styles.up}>
                    <div className={styles.container}>
                        <img src={require('./images/bac.png')} alt=""/>
                        <div className={styles.content}>
                            <div className={styles.avatarContainer}>
                                <img src={require('./images/avatar.png')} alt=""/>
                            </div>
                            <div className={styles.name}>里谷粒谷天</div>
                            <div className={styles.describe}>“这家伙很懒，什么都没写”</div>
                        </div>
                    </div>
                    <div className={styles.itemList}>
                        <div className={styles.item}>
                            <i className='iconfont icon-tianjialianxiren'/>
                            <div className={styles.itemContent}>订单</div>
                        </div>
                        <Link to='/MineCollection' className={styles.item}>
                            <i className='iconfont icon-Collection-wx3'/>
                            <div className={styles.itemContent}>收藏</div>
                        </Link>
                        <div className={styles.item}>
                            <i className='iconfont icon-youhui'/>
                            <div className={styles.itemContent}>优惠</div>
                        </div>
                        <div className={styles.item}>
                            <i className='iconfont icon-jifen'/>
                            <div className={styles.itemContent}>积分</div>
                        </div>
                    </div>
                </div>
                <div className={styles.down}>
                    <div className={styles.tab}>
                        {
                            ['作品','菜谱'].map((item, index)=>{
                                return (
                                    <div className={styles.btnContainer} key={index}>
                                        <div onClick={click}
                                             mark={index}
                                             style = {(index == this.state.active) ? {'borderBottomColor': '#f4ab1e','color': '#f4ab1e'}:null}>
                                            {item}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.works}>
                        <div className={styles.title}>开始分享我的美食作品</div>
                        <Link to="/MineUpload" className={styles.btn}>上传作品</Link>
                    </div>
                </div>
                <Tab {...arg}/>
            </div>
        )
    }
}