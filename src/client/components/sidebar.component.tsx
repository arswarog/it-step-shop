import * as React from 'react';
import { BasketComponent } from './basket.component';
import { Basket } from '../app/classes';

export interface ISidebarState {
}

export interface ISidebarProps {
    basket: Basket
}

export class SidebarComponent extends React.Component<ISidebarProps, ISidebarState> {
    render() {
        //let myBasket = 
        return (
            <div className="sidebar">
                Боковая панель
                <BasketComponent basket={this.props.basket}/>
            </div>
        );
    }
}