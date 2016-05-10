import React from 'react';
import ReactDom from 'react';
import { createHistory } from 'history';
import {Router, Route, Link, useRouterHistory} from 'react-router';

import "./stores/CounterStore";
import Home from './routes/Home.jsx';

const browserHistory = useRouterHistory(createHistory)({
    basename: '/recoil-test'
});

export default class Application extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home}/>
            </Router>
        );
    }
}
