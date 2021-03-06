import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Bundle from './Bundle';
import Loading from 'components/Loading/Loading';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';
import HomeDetail from 'bundle-loader?lazy&name=HomeDetail!pages/HomeDetail/HomeDetail';
import CategoryDetail from 'bundle-loader?lazy&name=CategoryDetail!pages/CategoryDetail/CategoryDetail';
import Buy from 'bundle-loader?lazy&name=Buy!pages/Buy/Buy';
import Market from 'bundle-loader?lazy&name=Market!pages/Market/Market';
import Discover from 'bundle-loader?lazy&name=Discover!pages/Discover/Discover';
import Mine from 'bundle-loader?lazy&name=Mine!pages/Mine/Mine';
import MineUpload from 'bundle-loader?lazy&name=MineUpload!pages/MineUpload/MineUpload';
import MineSet from 'bundle-loader?lazy&name=MineSet!pages/MineSet/MineSet';
import MineCollection from 'bundle-loader?lazy&name=MineCollection!pages/MineCollection/MineCollection';
import Login from 'bundle-loader?lazy&name=Login!pages/Login/Login';
import RegisterStepFirst from 'bundle-loader?lazy&name=RegisterStepFirst!pages/RegisterStepFirst/RegisterStepFirst';
import RegisterStepSec from 'bundle-loader?lazy&name=RegisterStepSec!pages/RegisterStepSec/RegisterStepSec';
import FindPwdStepSec from 'bundle-loader?lazy&name=FindPwdStepSec!pages/FindPwdStepSec/FindPwdStepSec';
import SearchResult from 'bundle-loader?lazy&name=SearchResult!pages/SearchResult/SearchResult';
import MineFocus from 'bundle-loader?lazy&name=MineFocus!pages/MineFocus/MineFocus';
import MineFans from 'bundle-loader?lazy&name=MineFans!pages/MineFans/MineFans';
import MineWorks from 'bundle-loader?lazy&name=MineWorks!pages/MineWorks/MineWorks';
import MarketListDetail from 'bundle-loader?lazy&name=MarketListDetail!pages/MarketListDetail/MarketListDetail';

const createComponent = (component) => (match) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...match}/> : <Loading/>
        }
    </Bundle>
);

export default () => (
        <Switch>
            <Route exact path="/" component={createComponent(Home)}/>
            <Route path="/HomeDetail" component={createComponent(HomeDetail)}/>
            <Route path="/CategoryDetail/:id" component={createComponent(CategoryDetail)}/>
            <Route path="/Buy" component={createComponent(Buy)}/>
            <Route path="/Market" component={createComponent(Market)}/>
            <Route path="/Discover" component={createComponent(Discover)}/>
            <Route path="/Mine" component={createComponent(Mine)}/>
            <Route path="/MineUpload" component={createComponent(MineUpload)}/>
            <Route path="/MineSet" component={createComponent(MineSet)}/>
            <Route path="/MineCollection" component={createComponent(MineCollection)}/>
            <Route path="/Login" component={createComponent(Login)}/>
            <Route path="/RegisterStepFirst" component={createComponent(RegisterStepFirst)}/>
            <Route path="/RegisterStepSec" component={createComponent(RegisterStepSec)}/>
            <Route path="/FindPwdStepSec" component={createComponent(FindPwdStepSec)}/>
            <Route path="/SearchResult" component={createComponent(SearchResult)}/>
            <Route path="/MineFocus" component={createComponent(MineFocus)}/>
            <Route path="/MineFans" component={createComponent(MineFans)}/>
            <Route path="/MineWorks" component={createComponent(MineWorks)}/>
            <Route path="/MarketListDetail" component={createComponent(MarketListDetail)}/>
            <Route component={createComponent(NotFound)}/>
        </Switch>
);