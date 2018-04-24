    import { combineReducers } from 'redux';
    import { catalog } from './catalog';
    import { basket } from './basket';
    
    export var combine = combineReducers( { catalog, basket } );