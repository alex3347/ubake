import React, {Component} from 'react';
import Header from 'components/Header/Header';

const styles = require('./Home.scss');

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
            </div>
        )
    }
}