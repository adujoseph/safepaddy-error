import {Component, OnInit, ElementRef, NgModule} from '@angular/core';
// import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
// import {CustomInterceptor} from '../_codebit/services/serviceInterceptors';
import {Configuration} from '../_codebit/app.constant';
import {ConfirmRegService} from './confirmregService';
import {Router} from '@angular/router';
import {Key} from '../_codebit/app.constant';
import {UserUtil} from '../_codebit/services/user-utils';


declare var $: any;

@Component({
    providers: [ConfirmRegService, Configuration],
    moduleId: module.id,
    selector: 'app-confirmreg',
    templateUrl: './confirmreg.component.html',
})

// @NgModule({
//     imports: [HttpClientModule],
//     providers: [
//         // {provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true}
//     ]
// })

export class ConfirmRegistrationComponent implements OnInit {
    public codes: any;
    public email: string = localStorage.getItem('email');
    public util: UserUtil = new UserUtil();
    public confirmData: any;
    // public user = localStorage.getItem('user');
    // getName() {
    //     this.name = JSON.parse(localStorage.getItem(Key.USER)).name
    //     this.email = JSON.parse(localStorage.getItem(Key.USER)).email
    //     this.username = JSON.parse(localStorage.getItem(Key.USER)).username
    //     this.phone = JSON.parse(localStorage.getItem(Key.USER)).phone
    // }

    constructor(private ConfirmRegService: ConfirmRegService, private router: Router) {
       this.codes = {};
        this.confirmData = {};
      //  this.email = JSON.parse(localStorage.getItem(Key.USER)).email
        console.log(this.email);
        // this.mail = UserUtil.email;
        // this.email = this.user.email; 
       // const email: string = 'ibb@election.com';
       // const otp: number = 654321;
    }

    verifyPhoneNumber() {
        this.ConfirmRegService.verifyPhoneNumber(this.confirmData.otp, this.email).subscribe((data: any) => {
                this.codes = data

                if (this.codes.status === 1) {this.router.navigate(['./thankyou']);}

                // console.log(this.codes);
            },
            error  => {
                console.log("Error occur!")
                alert('error');
            });
    }

   saveLoginData(token: string, user: any) {
        localStorage.setItem(Key.TOKEN, token)
        localStorage.setItem(Key.USER, JSON.stringify(user))
    }

    /**
     * The function for form submit
     */
    onSubmit() {
        console.log('submitted')
    }


    checkFullPageBackgroundImage() {
        var $page = $('.full-page');
        var image_src = $page.data('image');

        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
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
    }
}






