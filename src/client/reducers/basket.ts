import { Product, BasketItem } from '../app/classes';

export interface IBasket {
    items: BasketItem[];
}

export var basket = function(state: IBasket, action) {
    if (!state) state = {
        items: [],
    };
    switch (action.type) {
        case 'SET_BASKET':
            console.log('SET_BASKET it works');
            break;
        case 'BUY_ITEM':
            //console.log(action);
            let found = false;
            let items = state.items.map(item => {
                if (item.id === action.item.id) {
                    found = true;
                    return {
                        ...item,
                        count: item.count + 1
                    }
                } else
                    return item;
            });
            if (!found)
                items.push({
                    id: action.item.id,
                    count: 1,
                    name: action.item.name,
                    price: action.item.price,
                })
                
            return {
                ...state,
                items
            };
        default:
    }
    return state;
};