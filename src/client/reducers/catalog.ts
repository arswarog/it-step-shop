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
            items     : [],
            categories: [],
            counter   : 0,
        };
    }
    switch (action.type) {
        case 'SET_CATALOG':
            console.log('SET_CATALOG it works');
            state = {
                ...state,
                counter: 0,
                items  : action.items,
            };
            console.log('counter ', state.counter);
            return state;
        case 'DEC_CATALOG':
            console.log('DEC_CATALOG it reduces');
            state = {
                ...state,
                counter: state.counter - 1,
                items  : action.items,
            };
            console.log('counter ', state.counter);
            return state;
        case 'INC_CATALOG':
            console.log('INC_CATALOG it reduces');
            state = {
                ...state,
                counter: state.counter + 1,
                items  : action.items,
            };
            console.log('counter ', state.counter);
            return state;
        default:
    }
    return state;
};