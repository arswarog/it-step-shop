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
       
        let items = categories.map((item, index)=><li key={index}> {item.name}</li>);

        return (
            <div className="category">
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}