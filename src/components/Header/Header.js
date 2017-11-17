import React, {Component} from 'react';
import styles from './Header.scss'


export default class Header extends Component {
    render() {
        return (
            <div>
                <h1 className={styles.test}>头部de组件</h1>
            </div>
        )
    }
}