
import { Routes } from '@angular/router';

import { ConfirmRegistrationComponent } from './confirm.component';

export const ConfirmRegistrationRoutes: Routes = [{
    path: '',
    children: [{
        path: '',
        component: ConfirmRegistrationComponent
    }]
}];
