import * as React from 'react';
import { Product, Basket } from '../app/classes';

export interface IBasketState {
    count: number
}

export interface IBasketProps {
    basket: Basket
}


export class BasketComponent extends React.Component<IBasketProps, IBasketState> {
    constructor(props,state) {
        super(props,{
            count : 0
        });

        this.alert = this.alert.bind(this);
    }

    alert() {
        let count = this.props.basket.count;
        alert("Потом вы таки будете перенаправлены на корзину!"+count);
        this.setState({
            count: count
        })
    }

    render() {
        let products = this.props.basket.products;
        let myList = [];
        if (products.length>0) {
            let totalSumm = 0;
            products.forEach(element => {
                myList.push(<li key='{element.id}'>{element.name}</li>)
                totalSumm += element.price;
            });
            myList.push(<li key='total'>{products.length} товаров на сумму {totalSumm}</li>);
        } else {
            myList.push(<li>пустая корзина</li>);
        }

        return (
              
            <div className="basket" onClick={this.alert}>
                {myList} 
            </div>
        )
    }
}