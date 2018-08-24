import { Routes } from '@angular/router';

import { AdminloginComponent } from './Admin-login.component';

export const AdminloginRoutes: Routes = [{
    path: '',
    children: [{
        path: '',
        component: AdminloginComponent
    }]
}];
