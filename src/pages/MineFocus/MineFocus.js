import React, {Component} from 'react';
import Header from './Header/Header';


import styles from './MineFocus.scss'

export default class MineFocus extends Component {
    constructor(props){
        super(props)
        this.state = {
            active: '0'
        }
    }

    render() {

        const click = (e)=>{
            this.setState({active: e.target.getAttribute("mark")})
        }
        return (
            <div className={styles.container}>
                <Header/>
                <div className={styles.content}>
                    <div className={styles.tab}>
                        {
                            ['推荐','全部关注','特别关注'].map((item, index)=>{
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
                    <div className={styles.item}>
                        <div className={styles.left}>
                            <div className={styles.imgContainer}>
                                <img src={require('./images/avatar1.png')} alt=""/>
                            </div>
                            <div className={styles.contentContainer}>
                                <div className={styles.name}>拉不拉卡君</div>
                                <div className={styles.describe}>唯有美食与爱不可辜负</div>
                            </div>
                        </div>
                        <div className={styles.right}>关注</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.left}>
                            <div className={styles.imgContainer}>
                                <img src={require('./images/avatar2.png')} alt=""/>
                            </div>
                            <div className={styles.contentContainer}>
                                <div className={styles.name}>拉不拉卡君</div>
                                <div className={styles.describe}>唯有美食与爱不可辜负</div>
                            </div>
                        </div>
                        <div className={styles.right}>关注</div>
                    </div>
                </div>
            </div>
        )
    }
}
