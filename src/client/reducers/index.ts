import {combineReducers} from 'redux';
import {catalog} from './catalog';
export var combine = combineReducers(
    {catalog: catalog}  // можно просто {catalog}
)