import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import 'bootstrap/dist/css/bootstrap.css';

/* Route */
import { BrowserRouter as Router} from 'react-router-dom'

/* Components */
import App from './App'

ReactDOM.render((
    <Router>
        <App />
    </Router>
), document.getElementById('root'));
registerServiceWorker();