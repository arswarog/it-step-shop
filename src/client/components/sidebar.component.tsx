import * as React from 'react';
import { BasketComponent } from './basket.component';

export interface ISidebarState {
}

export interface ISidebarProps {
}

export class SidebarComponent extends React.Component<ISidebarProps, ISidebarState> {
    render() {
        //let myBasket = 
        return (
            <div className="sidebar">
                Боковая панель
                <BasketComponent />
            </div>
        );
    }
}