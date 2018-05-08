import * as React from 'react';
import { BasketContent } from '../containers/basketcontent';
import { HeaderComponent } from './header.component';
import { SidebarComponent } from './sidebar.component';
import { FooterComponent } from './footer.component';
import { Basket } from '../containers/basket';
import { BasketItem } from '../app/classes';

export interface IBasketContentProps {
    count: number,
    items: BasketItem[]
}

export class BasketContentComponent extends React.Component<IBasketContentProps> {
    render() {
        let items = [];
        if (this.props.items) {
            items = this.props.items
                        .map(item => <div
                            key={ item.id }>
                           [] { item.name } { item.price } * { item.count } 
                        </div>);
        }

        return (
            <div className="basketContent">
                <h2>Товары</h2>
                { items }
            </div>
        );
    }
}