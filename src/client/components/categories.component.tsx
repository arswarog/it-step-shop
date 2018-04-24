import * as React from 'react';
import { Category } from '../app/classes';
import { demoCategories } from '../demoData';

export interface ICategoriesState {
}

export interface ICategoriesProps {
}

export class CategoriesComponent extends React.Component<ICategoriesProps, ICategoriesState> {
    render() {
        let categories = demoCategories;

        let items = categories.map((item, index) => <a href="#"
                                                       className="list-group-item rounded-0 border-right-0 border-left-0"
                                                       key={ index }>{ item.name }</a>);

        return (
            <div className="list-group">
                <div className="list-group-item rounded-0 border-right-0 border-left-0 border-top-0">
                    <strong>Каталог товаров</strong>
                </div>
                { items }
            </div>
        );
    }
}