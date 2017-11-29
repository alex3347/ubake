import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Bundle from './Bundle';
import Loading from 'components/Loading/Loading';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';
import HomeDetail from 'bundle-loader?lazy&name=notFound!pages/HomeDetail/HomeDetail';
import CategoryDetail from 'bundle-loader?lazy&name=notFound!pages/CategoryDetail/CategoryDetail';
import Buy from 'bundle-loader?lazy&name=notFound!pages/Buy/Buy';
import Market from 'bundle-loader?lazy&name=notFound!pages/Market/Market';
import Discover from 'bundle-loader?lazy&name=notFound!pages/Discover/Discover';
import Mine from 'bundle-loader?lazy&name=notFound!pages/Mine/Mine';

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
            <Route path="/counter" component={createComponent(Counter)}/>
            <Route path="/userinfo" component={createComponent(UserInfo)}/>
            <Route path="/HomeDetail" component={createComponent(HomeDetail)}/>
            <Route path="/CategoryDetail" component={createComponent(CategoryDetail)}/>
            <Route path="/Buy" component={createComponent(Buy)}/>
            <Route path="/Market" component={createComponent(Market)}/>
            <Route path="/Discover" component={createComponent(Discover)}/>
            <Route path="/Mine" component={createComponent(Mine)}/>
            <Route component={createComponent(NotFound)}/>
        </Switch>
);