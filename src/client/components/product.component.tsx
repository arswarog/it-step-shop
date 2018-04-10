import * as React from 'react';
import { Product } from '../app/classes';

export interface IProductState {
}

export interface IProductProps {
    product: Product
}

export class ProductComponent extends React.Component<IProductProps, IProductState> {
    render() {
        return (
            <div className="product">
                <img src={this.props.product.photos[0]} />
                Продукт { this.props.product.name }<br/>
                { this.props.product.description }<br/>
                Цена { this.props.product.price }р.
                <div>
                </div>
            </div>
        );
    }
}