import React, {Component} from 'react';
import Tab from 'components/Tab/Tab';

const styles = require('./Page1.scss');

export default class Page1 extends Component {
    render() {
        let input

        return (
            <div className={styles.pageBox}>
                this is page1~
                <img src={require('./images/join-bac.jpg')}/>
                <input type="text" ref={node=>{input=node}}/>
                <Tab/>
            </div>
        )
    }
}