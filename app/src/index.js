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

ReactDOM.render((
    <Router>
        <div>
            <header className="Top-navbar">
                <Link to = "/">Home</Link> {' | '}
                <Link to = "/search">Search</Link>
            </header>
            <Switch>
                <Route exact path = "/" component = {Home} />
                <Route path = "/search" component = {Search} />
            </Switch>
        </div>
    </Router>
), document.getElementById('root'));
registerServiceWorker();