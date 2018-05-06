import { combineReducers } from 'redux';
import { catalog, ICatalog } from './catalog';
import { basket, IBasket } from './basket';

export interface ICombineState {
    catalog: ICatalog,
    basket: IBasket,
}

export var combine = combineReducers(
    {
        catalog,
        basket,
    },
);
