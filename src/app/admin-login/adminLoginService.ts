
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Response} from '@angular/http';
import {Configuration} from '../_codebit/app.constant';


@Injectable()
export class AdminLoginService {
    private adminUrl: string;

    constructor(private http: HttpClient, private _configuration: Configuration) {
        this.adminUrl = Configuration.API + 'profile/update'
    }

    setLogin(data: any) {
        return this.http.post(this.adminUrl, data)
    }
}

