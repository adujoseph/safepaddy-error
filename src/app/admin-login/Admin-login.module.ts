import { NgModule, OnInit  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminloginComponent } from './Admin-login.component';
import { AdminloginRoutes } from './Admin-login.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminloginRoutes),
        FormsModule
    ],
    declarations: [AdminloginComponent]
})

export class AdminLoginModule {}