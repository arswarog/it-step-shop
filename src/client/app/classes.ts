export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    photos: string[];
    catId: number;
}
export interface Category {
    id: number;
    name: string;
}

export interface BasketItem {
    id: number;
    count: number;
    name: string;
    price: number;
}

export interface Basket {
    products: BasketItem[];
    count: number;
    totalPrice: number;
}