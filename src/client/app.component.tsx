import * as React from 'react';
import { connect } from 'react-redux';
import { HeaderComponent } from './components/header.component';
import { SidebarComponent } from './components/sidebar.component';
import { ContentComponent } from './components/content.component';
import { FooterComponent } from './components/footer.component';
import * as Actions from './app/actions';

export class AppComponent extends React.Component<any, any> {

    render() {
        return (
            <div>
                <HeaderComponent/>
                <SidebarComponent/>
                <ContentComponent products={ this.props.products }/>
                <FooterComponent/>
            </div>
        );
    }
}

function mapStateToProps(state) {
//    console.log(state);
    return Object.assign({}, state);
}

export var App = connect(mapStateToProps, Actions)(AppComponent);
