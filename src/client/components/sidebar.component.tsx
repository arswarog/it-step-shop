import * as React from 'react';
import { CategoriesComponent } from './categories.component';

export interface ISidebarState {
}

export interface ISidebarProps {
}

export class SidebarComponent extends React.Component<ISidebarProps, ISidebarState> {
    render() {
        return (
            <div className="sidebar">
                <CategoriesComponent/>
            </div>
        );
    }
}