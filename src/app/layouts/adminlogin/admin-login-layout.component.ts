import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import 'rxjs/add/operator/filter';

declare var $: any;

@Component({
    selector: 'app-layout',
    templateUrl: './admin-login-layout.component.html'
})

export class AdminLoginLayoutComponent {
    location: Location;
    private _router: Subscription;
    // url: string;

    constructor( private router: Router, location:Location ) {
        this.location = location;
    }

    ngOnInit() {
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
        //   this.url = event.url;
        });
    }
}
