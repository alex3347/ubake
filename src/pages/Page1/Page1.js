import React, {Component} from 'react';

const styles = require('./Page1.scss');

export default class Page1 extends Component {
    render() {
        return (
            <div className={styles.pageBox}>
                this is page1~
                <img src={require('./images/join-bac.jpg')}/>
            </div>
        )
    }
}