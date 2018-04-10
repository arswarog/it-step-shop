import * as React from 'react';
import { CategoriesComponent } from './categories.component';
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
                <div className="sidebar__title">Каталог</div>
                <CategoriesComponent/>
            </div>
        );
    }
}