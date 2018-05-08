import * as React from 'react';
import { Content } from '../containers/content';
import { HeaderComponent } from './header.component';
import { SidebarComponent } from './sidebar.component';
import { FooterComponent } from './footer.component';
import { Basket } from '../containers/basket';
import { BasketContent } from '../containers/basketcontent';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

export class AppComponent extends React.Component<any, any> {

    render() {
        return (
            <div>
                <HeaderComponent />
                <SidebarComponent />
                counter: "{this.props.counter}"
                <button onClick={this.props.f}>counter+1</button>
                <button onClick={this.props.z}>counter-1</button>
                {/* <Content/> */}
                <BrowserRouter>
                    <Switch>
                        {/* <Route exact path="/" component={Main} />
                        <Route path="/about" component={About} />
                        <Route component={NotFound} /> */}
                    </Switch>
                </BrowserRouter>
                <FooterComponent />
            </div>
        );
    }
}
