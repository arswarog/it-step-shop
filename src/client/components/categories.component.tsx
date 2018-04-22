import * as React from 'react';
import { Category } from '../app/classes';

export interface ICategoriesState {
}

export interface ICategoriesProps {
}

export class CategoriesComponent extends React.Component<ICategoriesProps, ICategoriesState> {
    render() {
        let categories: Category[]=[
            {
                id: 1,
                name: 'Категория 1'
            },
            {
                id: 2,
                name: 'Категория 2'
            },
            {
                id: 3,
                name: 'Категория 3'
            },
            {
                id: 4,
                name: 'Категория 4'
            },
            {
                id: 5,
                name: 'Категория 5'
            }
        ];
       
        let items = categories.map((item, index)=><a href="#" className="list-group-item rounded-0 border-right-0 border-left-0" key={index}>{item.name}</a>);

        return (
            <div className="list-group">
            <div className="list-group-item rounded-0 border-right-0 border-left-0 border-top-0"><strong>Каталог товаров</strong></div>
                {items}
            </div>
        );
    }
}