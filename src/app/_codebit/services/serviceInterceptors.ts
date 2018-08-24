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
export class CustomInterceptor implements HttpInterceptor {
    //
    constructor(private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.url.indexOf(Configuration.API) === 0) {

            const token = this.getToken();
            if (token != null && token != isUndefined) {
                // req.headers.set("token", token);
                req = req.clone({
                    setHeaders: {
                        token: token
                    }
                });
                req.headers.append(Key.TOKEN, token)
            }

            if(req.url.indexOf(Configuration.API+"profile/photo/upload") === 0){
                req.headers.delete('Content-Type');

                // headers.delete
            }
        }
        return next.handle(req)

            .do((event: any) => {
                if (event instanceof HttpResponse) {
                    // let e : HttpResponse = (HttpResponse)event;
                }
            }).catch(err => {
                if (err instanceof HttpErrorResponse && (err.status == 401 || err.status == 403)) {
                    this.doLogoutComplete()
                    this.router.navigate(['/']);
                }

                return Observable.throw(err);
            });

    }

    getToken() {
        return localStorage.getItem(Key.TOKEN)
    }

    saveToken(token) {
        localStorage.setItem(Key.TOKEN, token)
    }

    doLogoutComplete() {
        // LoginComponent.setExpired(true)
        localStorage.removeItem(Key.TOKEN)
        localStorage.removeItem(Key.USER)
    }


    getPhoto() {
        const photo = JSON.parse(localStorage.getItem(Key.USER)).photo
        return Configuration.COMMON_API + 'profile/photo?photo=' + photo;
    }

    getName() {
        return JSON.parse(localStorage.getItem(Key.USER)).name
    }

 };