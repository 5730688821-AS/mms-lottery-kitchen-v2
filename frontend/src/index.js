import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import 'bootstrap/dist/css/bootstrap.css';

/* Route */
import { Router } from 'react-router-dom'

/* Components */
import App from './App'
import history from './helpers/history';

import rootReducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'react-router-redux';

const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
  }

const store = createStore(
    rootReducer,
    applyMiddleware(
        promise,
        thunk,
        routerMiddleware(history),
        logger
    )
)

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();