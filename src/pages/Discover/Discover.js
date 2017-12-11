import React, {Component} from 'react';
import Header from './Header/Header';
import Tab from 'components/Tab/Tab';
import Loading from 'components/Loading/Loading';

import {connect} from 'react-redux';

import {request} from "actions/discover";

import styles from './Discover.scss'

class Discover extends Component {
    constructor(props){
        super(props)
        this.state = {
            active: '0'
        }
    }
    componentDidMount(){
        this.props.request();
    }

    render() {
        let arg = {name:'discover'}
        const {content,reload,loading} = this.props.discover;

        const click = (e)=>{
            this.setState({active: e.target.getAttribute("mark")})
            this.props.request()
        }
        return (
            <div className={styles.container}>
                <Header/>
                <div className={styles.content}>
                    <div className={styles.tab}>
                        {
                            ['圈子','关注'].map((item, index)=>{
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
                    <div className={styles.swiper}/>
                    {
                        loading ?
                        <Loading reload={reload} request={this.props.request}/>
                        :
                        content.map((item, index) => {
                                return(
                                    <div className={styles.item} key={index}>
                                        <div className={styles.imgContainer}>
                                            <img src={require('./images/avatar'+(index+1)+'.png')} alt=""/>
                                        </div>
                                        <div className={styles.detail}>
                                            <div className={styles.title}>{item.name}</div>
                                            <div className={styles.time}>{item.time}</div>
                                            <div className={styles.describe}><i>#{item.group}#</i>{item.content}</div>
                                            <div className={styles.product}>
                                                <img src={require('./images/product'+(index+3)+'.png')} alt=""/>
                                                <img src={require('./images/product'+(index+4)+'.png')} alt=""/>
                                                <img src={require('./images/product'+(index+5)+'.png')} alt=""/>
                                            </div>
                                            <div className={styles.bottom}>
                                                <div className={styles.left}>来自 {item.phone}</div>
                                                <div className={styles.right}>
                                                    <div className={styles.comment}>
                                                        <i className='iconfont icon-pinglun'/>
                                                        <s>{item.comment}</s>
                                                    </div>
                                                    <div className={styles.praise}>
                                                        <i className='iconfont icon-dianzan'/>
                                                        <s>{item.praise}</s>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                    }
                </div>
                <Tab {...arg}/>
            </div>
        )
    }
}
export default connect((state) => ({
    discover: state.discover,
}), {request})(Discover);