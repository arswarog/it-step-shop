import * as React from 'react';

export interface IHeaderState {
}

export interface IHeaderProps {
}

export class HeaderComponent extends React.Component<IHeaderProps, IHeaderState> {
    render() {
        return (
            <div className="header">
                Заголовок
            </div>
        );
    }
}