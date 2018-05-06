import { ActionTypes } from './_actions';
import { Product } from '../app/classes';

export function buyItem(item: Product) {
    alert(`Купить ${item.name}`);
    return {
        type: ActionTypes.BUY_ITEM,
        item,
    };
}