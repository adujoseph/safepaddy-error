

import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Configuration} from '../_codebit/app.constant';
import {Response} from "@angular/http";


@Injectable()
export class LoginService {

    private actionUrl: string;
    private signUpUrl: string;
    private loginUrl: string;
    private resetUrl: string;

    constructor(private http: HttpClient, private _configuration: Configuration) {
        this.actionUrl = _configuration.ServerWithApiUrl; // + 'values/';
        this.signUpUrl = Configuration.COMMON_API + 'createUser'
        this.loginUrl = Configuration.COMMON_API + 'login'
        this.resetUrl = Configuration.COMMON_API + 'forgetpass'
    }

    createUser(data) {
        return this.http.post(this.signUpUrl, data, this._configuration.HTTP_OPTIONS)
    }

    userLogin(data) {
        // alert(this.loginUrl)
        return this.http.post(this.loginUrl, data, this._configuration.HTTP_OPTIONS)
    }

    resetPassword(data) {
        return this.http.get(this.resetUrl + '?email=' + data.email )
    }

}

