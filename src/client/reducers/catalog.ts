import { Product, Category } from '../app/classes';

export interface ICatalog {
    items: Product[];
    categories: Category[];
    counter: number;
}
export var catalog = function(state: ICatalog, action) {
    console.log('state', state, 'action', action);
    if (!state) {
        state = {
            items: [],
            categories: [],
            counter: 0
        }
    }
    switch(action.type) {
        case 'SET_CATALOG':
            return {
                ...state,
                items: action.items,
                counter: state.counter+1
            };
        case 'LOW':
            return {
                ...state,
                counter: state.counter-1
            }
        default:
    }
    return state;
}