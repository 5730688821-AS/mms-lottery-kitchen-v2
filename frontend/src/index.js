import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import 'bootstrap/dist/css/bootstrap.css';

/* Route */
import { Router } from 'react-router-dom'

/* Components */
import App from './App'
import history from './global/history';

ReactDOM.render((
    <Router history={history}>
        <App />
    </Router>
), document.getElementById('root'));
registerServiceWorker();