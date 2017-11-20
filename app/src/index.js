import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, browserHistory, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk'
import promise from 'redux-promise'

import registerServiceWorker from './registerServiceWorker';

import './index.css';

import 'bootstrap/dist/css/bootstrap.css';

/* Route */
import { Router } from 'react-router-dom'

/* Components */
import App from './App'
import history from './helpers/history';
import rootReducer from './reducers';
import { createBrowserHistory } from 'history';

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
    applyMiddleware(promise,thunk,logger,routerMiddleware(history))
)

// const history = syncHistoryWithStore(_history,store)

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();