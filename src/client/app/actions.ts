import { Data } from "./data";
import { ActionTypes } from "./atypes";
import { Product } from './classes';

export function buyItem(item: Product) {
    return {
        type: ActionTypes.BUY_ITEM,
    };
}

export function loadItems(category: number = 0) {
    return {
        type: ActionTypes.LOAD_ITEMS,
        category,
    };
}
