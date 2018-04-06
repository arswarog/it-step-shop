import * as React from 'react';

export interface ISidebarState {
}

export interface ISidebarProps {
}

export class SidebarComponent extends React.Component<ISidebarProps, ISidebarState> {
    render() {
        return (
            <div className="sidebar">
                Боковая панель
            </div>
        );
    }
}