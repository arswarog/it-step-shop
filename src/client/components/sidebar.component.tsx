import * as React from 'react';
import { CategoriesComponent } from './categories.component';
import { BasketComponent } from './basket.component';
import { selectCategory } from '../actions/catalog';

export interface ISidebarState {
}

export interface ISidebarProps {
    selectCategory: any;
}

export class SidebarComponent extends React.Component<ISidebarProps, ISidebarState> {
    render() {
        //let myBasket = 
        return (
            <div className="sidebar">
                Боковая панель
                <BasketComponent/>
                <div className="sidebar__title">Каталог</div>
                <CategoriesComponent selectCategory={this.props.selectCategory} />
            </div>
        );
    }
}