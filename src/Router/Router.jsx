import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';

import index from '../index'; // 初始页面

class Roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

const header = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/Header').default)
    },'Header')
}

const footer = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/Footer').default)
    },'Footer')
}

const app = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/App').default)
    },'App')
}

const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={index} />//首页
            <Route path="index" component={index} />
            <Route path="header" getComponent={header} />//帮助中心
            <Route path="footer" getComponent={footer} />//销售记录
            <Route path="app" getComponent={app} />//选择商品
            <Redirect from='*' to='/'  />
        </Route>
    </Router>
);

export default RouteConfig;