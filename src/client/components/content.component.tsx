import * as React from 'react';

export interface IContentState {
}

export interface IContentProps {
}

export class ContentComponent extends React.Component<IContentProps, IContentState> {
    render() {
        return (
            <div className="content">
                Контент
            </div>
        );
    }
}