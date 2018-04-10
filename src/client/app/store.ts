import { ActionTypes } from './atypes';
import { Basket, Product } from './classes';
import * as Demo from './demoData';

export interface IStoreState {
    products: Product[];
    basket: Basket;
}

export var reducer = function(state: IStoreState, action) {
    switch (action.type) {
        case ActionTypes.SET_STATE:
            return action.state;

        case ActionTypes.BUY_ITEM:
            state = {
                ...state,
                basket: buyItem(state.basket, action.item),
            };
            return state;

        case
        ActionTypes.LOAD_ITEMS:
            state = {
                ...state,
                products: loadItems(action.category),
            };
            return state;
    }

    return state;
};

function loadItems(state: IStoreState, category: number = 0): Product[] {
    return Demo.products;
}

function buyItem(basket: Basket, item: Product): Basket {
    return basket;
}