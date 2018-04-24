import * as React from 'react';
import { Content } from '../containers/content';
import { HeaderComponent } from './header.component';
import { SidebarComponent } from './sidebar.component';
import { FooterComponent } from './footer.component';

export class AppComponent extends React.Component<any, any> {

    render() {
        return (
            <div>
                <HeaderComponent/>
                <SidebarComponent/>
                counter: "{ this.props.counter }"
                <button>counter+1</button>
                <button>counter-1</button>
                <HeaderComponent/>
                <SidebarComponent/>
                <Content/>
                <FooterComponent/>
            </div>
        );
    }
}
