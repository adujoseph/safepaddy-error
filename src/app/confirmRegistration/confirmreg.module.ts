import { NgModule, OnInit  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConfirmRegistrationComponent } from './confirm.component';
import { ConfirmRegistrationRoutes} from './confirmreg.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ConfirmRegistrationRoutes),
        FormsModule
    ],
    declarations: [ConfirmRegistrationComponent]
})

export class ConfirmRegistrationModule {
}