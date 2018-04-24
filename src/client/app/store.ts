import { ActionTypes } from './atypes';
import { Basket, Product, BasketItem } from './classes';
import * as Demo from './demoData';
import { BasketComponent } from '../components/basket.component';

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
    if (!basket) {
        basket = {
            products: [],
            count: 0,
            totalPrice: 0,
        }
    };
    basket = {
        ...basket,
        products: basket.products.map(item=>item),
    };
    let newItem: BasketItem = {
        id: item.id,
        count: 1,
        name: item.name,
        price: item.price,
    };
    basket.products.push(newItem);
    let totalSumm = 0;
    basket.products.forEach(element => {
        totalSumm += element.price * element.count;
    });
    basket.totalPrice = totalSumm;
    return basket;
}