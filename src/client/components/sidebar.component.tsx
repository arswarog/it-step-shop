import * as React from 'react';
import { Categories } from '../containers/categories';

export interface ISidebarState {
}

export interface ISidebarProps {
}

export class SidebarComponent extends React.Component<ISidebarProps, ISidebarState> {
    render() {
        return (
            <div className="sidebar">
                <Categories/>
            </div>
        );
    }
}