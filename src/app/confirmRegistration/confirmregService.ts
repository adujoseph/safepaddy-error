
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
// import {Observable} from 'rxjs';

import {Configuration} from '../_codebit/app.constant';
import {Response} from '@angular/http';



@Injectable()
export class ConfirmRegService {
    private verifyPhoneUrl: string;

    constructor(private http: HttpClient, private _configuration: Configuration) {
        this.verifyPhoneUrl = Configuration.COMMON_API + 'verifyOTP'
    }
    verifyPhoneNumber(otp: number, email: string ) {
        return this.http.get(this.verifyPhoneUrl + '?otp=' + otp + '&email=' + email);
    }
}

