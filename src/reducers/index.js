import { combineReducers } from 'redux';

// Reducers
import reasons from './reason-reducer';

// Combine Reducers
var reducers = combineReducers({
    reasons
});

export default reducers;
