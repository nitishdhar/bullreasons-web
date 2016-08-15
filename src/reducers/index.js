import { combineReducers } from 'redux';

// Reducers
import reasonReducer from './reason-reducer';

// Combine Reducers
var reducers = combineReducers({
    reasonState: reasonReducer
});

export default reducers;
