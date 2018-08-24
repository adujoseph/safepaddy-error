import {Component, OnInit, ElementRef, NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
// import {CustomInterceptor} from '../_codebit/services/serviceInterceptors';
import {Configuration} from '../_codebit/app.constant';
import {LoginService} from './userLoginService';
import {Router} from '@angular/router';
import {Key} from '../_codebit/app.constant';

declare var $: any;
declare interface User {
    text?: string;
    email?: string; //  must be valid email format
    password?: string; // required, value must be equal to confirm password.
    confirmPassword?: string; // required, value must be equal to password.
    number?: number; // required, value must be equal to password.
    url?: string;
    idSource?: string;
    idDestination?: string;
}

@NgModule({
    imports: [HttpClientModule],
    providers: [
       // {provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true}
    ]
})

@Component({
    providers: [LoginService, Configuration],
    moduleId: module.id,
    selector: 'app-validate',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']

})

export class ValidateComponent implements OnInit {

    public register: User;
    public login: User;
    public typeValidation: User;

    ngOnInit() {
        this.register = {
            email: '',
            password: '',
            confirmPassword: ''
        }
        this.login = {
            email: '',
            password: ''
        }
        this.typeValidation = {
            text: '',
            email: '',
            idSource: '',
            idDestination: '',
            url: ''
        }
    }

    save(model: User, isValid: boolean) {
        // call API to save customer
        if (isValid) {
            console.log(model, isValid);
        }
    }

    save1(model: User, isValid: boolean) {
        // call API to save customer
        if (isValid) {
            console.log(model, isValid);
        }
    }

    save2(model: User, isValid: boolean) {
        // call API to save customer
        if (isValid) {
            console.log(model, isValid);
        }
    }

    onSubmit(value: any): void {
        console.log(value);
    }
}
