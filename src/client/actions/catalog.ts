import { ActionTypes } from './_actions';
import { Product } from '../app/classes';
import { demoProducts } from '../demoData';

export function addCounter() {
    //alert('Дошло!');
    return {
        type    : 'SET_CATALOG',
        counter : 0,
        products: demoProducts,
    }
}

// export function buyItem(item: Product) {
//     //alert('Вы купили!');
//     // return {
//     //     type: ActionTypes.BUY_ITEM,
//     //     item,
//     // };
//     // return {
//     //     type    : 'SET_CATALOG',
//     //     counter : 0,
//     //     products: [],
//     // }
// }