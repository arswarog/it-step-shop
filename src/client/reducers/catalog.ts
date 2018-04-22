import { Product } from "../app/classes";

export interface ICatalog { 
    counter: number;
    items: Product[]
};

export var catalog = function (state: ICatalog, action) {
    console.log('action', action);
    console.log('state', state);
    if (!state) state = {
        counter: 0,
        items: [],
    }
    switch (action.type) {
        case 'SET_CATALOG': console.log('SET_CATALOG it works');
                            return {
                                ...state,
                                counter: state.counter+1,
                                items: action.items,
                            }
        case 'LOW_CATALOG': console.log('LOW_CATALOG it reduces');
                            return {
                                ...state,
                                counter: state.counter-1,
                                items: action.items,
                            }
        default: 
    }
    return state;
}