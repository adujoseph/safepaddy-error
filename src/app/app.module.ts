import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; // this is needed!
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';

import {SidebarModule} from './sidebar/sidebar.module';
import {FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import {FooterModule} from './shared/footer/footer.module';
import {NavbarModule} from './shared/navbar/navbar.module';
import {PagesnavbarModule} from './shared/pagesnavbar/pagesnavbar.module';
import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import {UserLayoutComponent} from './layouts/user/user-layout.component';
import {AppRoutes} from './app.routing';
import {AdminSidebarModule} from './admin-sidebar/sidebar.module';
import {AdminLoginLayoutComponent} from './layouts/adminlogin/admin-login-layout.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CustomInterceptor} from './_codebit/services/serviceInterceptors';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes),
        HttpModule,
        SidebarModule,
        AdminSidebarModule,
        NavbarModule,
        FooterModule,
        FixedPluginModule,
        PagesnavbarModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CustomInterceptor,
            multi: true
        }
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        UserLayoutComponent,
        AuthLayoutComponent,
        AdminLoginLayoutComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
