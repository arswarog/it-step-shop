import * as React from 'react';
import { ProductComponent } from './product.component';
import { Product } from '../app/classes';

export interface IContentState {
}

export interface IContentProps {
    products: Product[]
}

export class ContentComponent extends React.Component<IContentProps, IContentState> {
    render() {
        return (
            <div className="content">
                Товары
                { this.props.products.map(item => <ProductComponent key={ item.id } product={ item }/>) }
            </div>
        );
    }
}