import { demoProducts } from '../demoData';
export function selectCategory(catid: number) {
    return {
        type    : 'SELECT_CATALOG',
        categoryId : catid,
    };
}4