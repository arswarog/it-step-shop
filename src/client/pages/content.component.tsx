import * as React from 'react';
import { ProductComponent } from '../components/product.component';
import { Product } from '../app/classes';
import { Link } from 'react-router-dom';

export interface IContentState {
}

export interface IContentProps {
    counter: number;
    products: Product[];
    buyItem: (item: Product) => any,
}

export class ContentComponent extends React.Component<IContentProps, IContentState> {
    render() {
        let items = [];
        if (this.props.products) {
            items = this.props.products
                        .map(item => <ProductComponent
                            key={ item.id }
                            product={ item }
                            buyItem={ this.props.buyItem }
                        />);
        }

        return (
            <div className="content">
                <h2>Товары</h2>               
                
                <Link to="/basket">Перейти в корзину</Link>
                { items }
            </div>
        );
    }
}