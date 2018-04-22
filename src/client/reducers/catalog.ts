import { Product } from "../app/classes";

export interface ICatalog {
    items: Product[]; // Здесь мы описали состояние
    counter: number;
} // отображаются те продукты, которые отображаются на данный момент на экране

export var catalog = function(state: ICatalog, action) { // наш reducer это функция  function(state: ICatalog, action)
    console.log("state", state);
    console.log("action", action);
    if(!state) state = {
        items: [],
        counter: 0
    }
    switch (action.type) {
        case 'SET_CATALOG':  // задание наших итемов
        return {
            ...state, // эта запись означает, формирование текущего состояния 
            // не меняя его (передаем новому объекту все свойства state) копируем объект  
            items: action.items,
            counter: state.counter+1 
        }
        case 'LOW_CATALOG':
        return {
            ...state, 
            counter: state.counter-1 
        }
        default: 
        return state;
    }
}

