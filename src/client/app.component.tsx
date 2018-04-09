import * as React from 'react';
import { HeaderComponent } from './components/header.component';
import { SidebarComponent } from './components/sidebar.component';
import { ContentComponent } from './components/content.component';
import { FooterComponent } from './components/footer.component';
import { CategoriesComponent } from './components/categories.component';

export class AppComponent extends React.Component<any, any> {

    render() {
        return (
            <div>
                <HeaderComponent/>
                <SidebarComponent/>
                <ContentComponent/>
                <FooterComponent/>
            </div>
        );
    }
}
