import * as React from 'react';
import {Switch, BrowserRouter} from 'react-router-dom';
import {Router} from 'react-router-dom';
import {Route} from 'react-router-dom';
import { Content } from '../containers/content';
import { HeaderComponent } from './header.component';
import { SidebarComponent } from './sidebar.component';
import { FooterComponent } from './footer.component';

export class AppComponent extends React.Component<any, any> {

    render() {

        return (
            <div>
                <HeaderComponent />
                <SidebarComponent selectCategory={this.props.selectCategory} />
                counter: "{this.props.counter}"
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/products" component={Content} />
                    </Switch>
                </BrowserRouter>
                <FooterComponent />
            </div>
        );
    }
}
