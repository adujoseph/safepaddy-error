import {Component, OnInit, ElementRef, NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
// import {CustomInterceptor} from '../_codebit/services/serviceInterceptors';
import {Configuration} from '../_codebit/app.constant';
import {LoginService} from './userLoginService';
import {Router, PRIMARY_OUTLET} from '@angular/router';
import {Key} from '../_codebit/app.constant';
import {InternationalPhoneModule} from 'ng4-intl-phone';

declare var $: any;
declare var swal: any;

declare interface User {
    text?: string;
    email?: string; //  must be valid email format
    password?: string; // required, value must be equal to confirm password.
    confirmPassword?: string; // required, value must be equal to password.
    number?: number; // required, value must be equal to password.
    url?: string;
    idSource?: string;
    idDestination?: string;
    name?: string;
    username?: string;
}

@NgModule({
    imports: [HttpClientModule, InternationalPhoneModule],
    providers: [
       // {provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true}
    ]
})

@Component({
    providers: [LoginService, Configuration],
    moduleId: module.id,
    selector: 'app-index',
    templateUrl: './userlogin.component.html',
    styleUrls: ['./userlogin.component.css']

})

export class UserLoginComponent implements OnInit {
    toggle: Number;
    newToggle: Number;
    resetPass: Number;
    confirmReg: Number;

    showPasswordNow: Boolean;

    public values: any[];
    public signUpResponse: any;
    public signUpData: any;
    public loginData: any;
    public loginResponse: any;

    public loginError: string;
    public registerError: string;
    public resetError: string;

    public resetData: any;
    public resetResponse: any;
    public register: User;
    public login: User;
    public typeValidation: User;
    public loginProcessing: boolean = false;



    // public pref: string = "";


    constructor(private loginService: LoginService, private router: Router) {
        this.signUpData = {};
        this.signUpResponse = {};
        this.loginData = {};
        this.loginResponse = {};
        this.resetData = {};
        this.resetResponse = {};

    }


    mousedown() {
        this.showPasswordNow = true;
    }

    mouseup() {
        this.showPasswordNow = false;
    }

    gotoReg() {
        this.toggle = 1;
    }

    gotoForg() {
        this.toggle = 2;
        this.resetPass = 0;
    }

    gotoLogIn() {
        this.toggle = 0;
    }

    newLogIn() {
        this.toggle = 3;
    }

    callRegister() {
        this.newToggle = 1;
    }

    callLogin() {
        this.newToggle = 2;
    }

    callReset() {
        this.newToggle = 3;
    }

    /**
     * The function for creating users
     */
    createUser() {
        this.loginService.createUser(this.signUpData)
            .subscribe((data: any) => {
                    if (data.status === 1) {
                        console.log(this.signUpData.phone)
                        this.router.navigate(['/confirmRegistration']);
                    } else {
                        this.registerError = data.message
                    }
                },
                error => {
                    alert('Registration not successful');
                    console.log('Error occur!');
                    console.log(error)
                    this.registerError = error.message || error.data.message;
                });
    }

    resetPassword() {
        this.loginService.resetPassword(this.resetData)
            .subscribe((data: any) => {
                    this.resetResponse = data;
                    console.log(this.resetResponse);
                    if (this.resetResponse.status === 1) {
                        this.resetPass = 1

                    } else {
                        this.resetError = data.message;
                        // alert('this email address is not associated with any account');
                        // alert(this.resetResponse.message);
                    }
                },
                error => {
                    // alert('Error occur!' + error.message);
                    this.resetError = error.message || error.data.message;
                    // this.resetError = error.message;
                    // .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
                });
    }

    /**** check point **/
    userLogin() {
        this.loginProcessing = true;
        this.loginService.userLogin(this.loginData)
            .subscribe((data: any) => {
                    this.loginProcessing = false;
                    this.loginResponse = data
                    console.log(this.loginResponse);
                    if (this.loginResponse.status === 1) {
                        this.saveLoginData(this.loginResponse.message, this.loginResponse.user);
                        // this.router.navigate(['/safeuser']);
                        window.location.href = 'http://localhost:4203/safeuser/home';
                    } else {
                        this.loginError = this.loginResponse.message;
                    }
                },
                error => {
                    this.loginProcessing = false;
                    // alert('Error occur!');
                    this.loginError = error.message || error.data.message;
                    // alert(this.loginError);
                });
    }


    saveLoginData(token: string, user: any) {
        localStorage.setItem(Key.TOKEN, token)
        localStorage.setItem(Key.USER, JSON.stringify(user))
    }


    subscribe() {
        if (localStorage.getItem('token') != null) {
            // redirect to subscribe page
            this.router.navigate(['/safeuser/settings/billings']);
        } else {
            // sweet alert to output response
            // redirect to login page
            swal({
                html: ' You are currently not Logged In <br> Please Log in here '
            });
            window.scrollTo(0, 0);
        }
    }

    /**
     * The function for form submit
     */
    // onSubmit() {
    //     console.log('submitted')
    // }


    checkFullPageBackgroundImage() {
        const $page = $('.full-page');
        const image_src = $page.data('image');

        if (image_src !== undefined) {
            const image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };

    ngOnInit() {
        this.checkFullPageBackgroundImage();
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)
        this.showSessionExpired()
    }

    public showSessionExpired() {
        $.notify({
            icon: "pe-7s-key",
            message: "Your session has expired. <b>Please login</b> to continue enjoying <b>SafePaddy<b/>"
        }, {
            type: 'info',
            timer: 4000,
            placement: {
                from: 'top',
                align: 'center'
            }
        });
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
