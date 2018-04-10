import * as React from 'react';
import { Product } from '../app/classes';

export interface IProductState {
}

export interface IProductProps {
    product: Product
}

export class ProductComponent extends React.Component<IProductProps, IProductState> {
    render() {
        let product = this.props.product;
        return (
            <div className="product">

                <img src={product.photos[0]} />
                <p>Цена {product.price }р.</p>
                <h1>{ product.name }</h1><br/>
                { product.description }<br/>
                
                <div>
                </div>

            </div>
        );
    }
}