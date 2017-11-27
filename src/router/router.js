import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Bundle from './Bundle';
import Loading from 'components/Loading/Loading';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';
import HomeDetail from 'bundle-loader?lazy&name=notFound!pages/HomeDetail/HomeDetail';
import CategoryDetail from 'bundle-loader?lazy&name=notFound!pages/CategoryDetail/CategoryDetail';
import Buy from 'bundle-loader?lazy&name=notFound!pages/Buy/Buy';

const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component/> : <Loading/>
        }
    </Bundle>
);

export default () => (
        <Switch>
            <Route exact path="/" component={createComponent(Home)}/>
            <Route path="/page1" component={createComponent(Page1)}/>
            <Route path="/counter" component={createComponent(Counter)}/>
            <Route path="/userinfo" component={createComponent(UserInfo)}/>
            <Route path="/HomeDetail" component={createComponent(HomeDetail)}/>
            <Route path="/CategoryDetail" component={createComponent(CategoryDetail)}/>
            <Route path="/Buy" component={createComponent(Buy)}/>
            <Route component={createComponent(NotFound)}/>
        </Switch>
);