import * as React from 'react';
import { HeaderComponent } from '../components/header.component';
import { SidebarComponent } from '../components/sidebar.component';
import { FooterComponent } from '../components/footer.component';
import { CategoriesComponent } from '../components/categories.component';
import { Content } from '../containers/content';

export class AppComponent extends React.Component<any, any> {

    render() {
        return (
            <div>
                counter: "{this.props.counter}"
                <button >counter+1</button>
                <button >counter-1</button>
                <HeaderComponent/>
                <SidebarComponent/>
                <Content/>
                <FooterComponent/>
            </div>
        );
    }
}
