import {combineReducers} from 'redux';
import {weatherReducer} from './weatherReducer';
import {featureReducer} from './featureReducer';

export default combineReducers({
    weatherReducer,featureReducer
})