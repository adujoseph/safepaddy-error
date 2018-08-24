/**
 * Created by olyjosh on 22/02/2018.
 */
import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class Configuration {


    // private SERVER_URL = 'http://localhost';
    // private SERVER_URL = 'http://34.222.16.164'
    // public safeuser = this.SERVER_URL + ':4203';
    // public sysAdmin = this.SERVER_URL + ':4202';
    // public index = this.SERVER_URL + ':4201';
    public static readonly SERVER_URL = 'http://192.168.1.2:8321/';
    // public static readonly SERVER_URL = 'http://127.0.0.1:8321/';
    // public static readonly SERVER_URL = 'http://54.218.130.64:8321/';
   // public static readonly API = Configuration.SERVER_URL+'api/';

    // public SERVER_URL = 'http://192.168.40.121:8321/';
    // SERVER_URL = ' http://54.218.130.64:8321/';
    public static readonly COMMON_API = Configuration.SERVER_URL + 'auth/';
    public static readonly API = Configuration.SERVER_URL + 'api/';
    public static readonly COMMON = Configuration.SERVER_URL + 'common/';
    public static readonly ADMIN_API = Configuration.SERVER_URL + 'admin/api/';

    public ServerWithApiUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/oliverveits.wordpress.com/posts/3078'


    public safeuser = 'http://localhost:4203';
    public sysAdmin = 'http://localhost:4202';
    public index =  'http://localhost:4201';

    public HTTP_OPTIONS = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
}

@Injectable()
export class Key {
    public static readonly USER = 'user';
    public static readonly TOKEN = 'token';

    public static readonly PAY_PUB_KEY = 'pk_test_40b2ce794bb5877019896be1ed2c2c0713130d6c';
}
