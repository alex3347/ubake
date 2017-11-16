import React, {Component} from 'react';

// import './Page1.scss';
const styles = require('./Page1.scss');
import image from './images/join-bac.jpg';

export default class Page1 extends Component {
    render() {
        return (
            <div className={styles.pageBox}>
                this is page1~
                <img src={image}/>
            </div>
        )
    }
}