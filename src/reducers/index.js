import { combineReducers } from 'redux';

// Reducers
import reasons from './reason-reducer';
import login from './login-reducer';

// Combine Reducers
var reducers = combineReducers({
    reasons,
    login
});

export default reducers;
