import * as React from 'react';

export interface IFooterState {
}

export interface IFooterProps {
}

export class FooterComponent extends React.Component<IFooterProps, IFooterState> {
    render() {
        return (
            <div className="footer">
                Подвал
            </div>
        );
    }
}