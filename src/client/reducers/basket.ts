import { Product } from "../app/classes";

export interface IBasket {
    items: Product[];
};
export var basket = function (state: IBasket, action) {
    if (!state) state = {
        items: [],
    }
    switch (action.type) {
        case 'SET_BASKET': //console.log('SET_BASKET it works');
        default: 
    }
    return state;
}