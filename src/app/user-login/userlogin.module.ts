import { NgModule, OnInit  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserLoginComponent } from './userlogin.component';
import { UserLoginRoutes} from './userlogin.routing';
import { InternationalPhoneModule } from 'ng4-intl-phone';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UserLoginRoutes),
        FormsModule,
        ReactiveFormsModule,
        InternationalPhoneModule
    ],
    declarations: [UserLoginComponent]
})

export class UserLoginModule {}
