import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { searchReducer } from './searchReducer.js';

const rootReducer = combineReducers({
    search: searchReducer,
    routing: routerReducer,
})

export default rootReducer;