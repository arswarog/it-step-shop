import { Product } from "../app/classes";

export interface ICatalog { 
    counter: number;
    items: Product[]
};

export var catalog = function (state: ICatalog, action) {
    //console.log('action', action);
    //console.log('state', state);
    if (!state) state = {
        counter: 0,
        items: [],
    }
    switch (action.type) {
        case 'SET_CATALOG': console.log('SET_CATALOG it works');
                            state = {
                                ...state,
                                counter: 0,
                                items: action.items,
                            };
                            console.log('counter ',state.counter);
                            return state;
        case 'DEC_CATALOG': console.log('DEC_CATALOG it reduces');
                            state = {
                                ...state,
                                counter: state.counter-1,
                                items: action.items,
                            }
                            console.log('counter ',state.counter)
                            return state;
        case 'INC_CATALOG': console.log('INC_CATALOG it reduces');
                            state = {
                                ...state,
                                counter: state.counter+1,
                                items: action.items,
                            }
                            console.log('counter ',state.counter)
                            return state;
        
        default: 
    }
    return state;
}