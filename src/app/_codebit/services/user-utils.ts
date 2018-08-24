/**
 * Created by olyjosh on 22/02/2018.
 */

import 'rxjs/add/operator/map';

import {
    HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders,
    HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Configuration, Key} from '../app.constant';
import {isUndefined} from 'util';
import {Router} from '@angular/router';


@Injectable()
export class UserUtil {

    public getPhoto() {
        const photo: string = JSON.parse(localStorage.getItem(Key.USER)).photo;
        const photox = photo != null ? Configuration.COMMON_API + 'profile/photo?photo=' + photo : '/assets/img/faces/face-0.jpg'
        return photox;
    }

    public getPhotoById(photo: string) {
        const photox = photo != null ? Configuration.COMMON_API + 'profile/photo?photo=' + photo : '/assets/img/faces/face-0.jpg'
        return photox;
    }

    public getUserPhoto() {
        return Configuration.API + 'profile/photo';
    }

    public getName() {
        return JSON.parse(localStorage.getItem(Key.USER)).name
    }
    public username() {
        return JSON.parse(localStorage.getItem(Key.USER)).username
    }
    public phone() {
        return JSON.parse(localStorage.getItem(Key.USER)).phone
    }
    public email() {
        return JSON.parse(localStorage.getItem(Key.USER)).email
    }

    public setPhotoToStorage(photo: string){
        const user : any  = JSON.parse(localStorage.getItem(Key.USER))
        user.photo = photo;
        localStorage.setItem(Key.USER, JSON.stringify(user))
    }
}