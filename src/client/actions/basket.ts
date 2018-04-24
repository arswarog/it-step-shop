import { ActionTypes } from './_actions';
import { Product } from '../app/classes';

export function buyItem(item: Product) {
    return {
        type: ActionTypes.BUY_ITEM,
        item,
    };
}