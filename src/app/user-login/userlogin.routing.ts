
import { Routes } from '@angular/router';

import { UserLoginComponent } from './userlogin.component';

export const UserLoginRoutes: Routes = [{
    path: '',
    children: [{
        path: '',
        component: UserLoginComponent
    }]
}];
