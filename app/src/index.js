import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import 'bootstrap/dist/css/bootstrap.css';

/* Route */
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

/* Components */
import Search from './ui/components/search';
import Home from './ui/components/home';
import Example from './ui/components/example';

ReactDOM.render((
    <Router>
        <div>
            <Switch>
                <Route exact path = "/" component = {Home} />
                <Route path = "/search" component = {Search} />
                <Route path = "/ex" component = {Example} />
            </Switch>
        </div>
    </Router>
), document.getElementById('root'));
registerServiceWorker();