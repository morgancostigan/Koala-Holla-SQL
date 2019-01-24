import { combineReducers } from 'redux';
import koalaList from './koalaList';
import inputView from './inputView';

const rootReducer = combineReducers({
    koalaList,
    inputView
});

export default rootReducer;