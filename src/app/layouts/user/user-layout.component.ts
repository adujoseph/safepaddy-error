import {Component, OnInit, OnDestroy, ViewChild, HostListener} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {LocationStrategy, PlatformLocation, Location} from '@angular/common';
import 'rxjs/add/operator/filter';
import {NavbarComponent} from '../../shared/navbar/navbar.component';
import {Key} from '../../_codebit/app.constant';
import {isNullOrUndefined} from 'util';
import {isUndefined} from 'util';

declare var $: any;

@Component({
    selector: 'app-layout',
    templateUrl: './user-layout.component.html'
})

export class UserLayoutComponent implements OnInit {
    location: Location;
    private _router: Subscription;
    private hasBeenRedirected: boolean;

    @ViewChild('sidebar') sidebar;
    @ViewChild(NavbarComponent) navbar: NavbarComponent;

    constructor(private router: Router, location: Location) {
        this.location = location;
    }

    ngOnInit() {
        this.validateAuthentication();
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
            //   this.url = event.url;
            this.navbar.sidebarClose();
        });

        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            var $main_panel = $('.main-panel');
            $main_panel.perfectScrollbar();
        }
        //storing data in local storage , obtaining token and user parameters

    }

    verifyLoggedIn() {
        let token = localStorage.getItem(Key.TOKEN);
        let user = localStorage.getItem(Key.USER)

        if (token == null || token == isUndefined || user == isNullOrUndefined || user == isUndefined) {
            // ThankYouComponent.setExpired(true)
            this.router.navigate(['/']);
        }
    }

    validateAuthentication() {
        this.verifyLoggedIn();
        //TODO : Logic to validate session expiry status
    }

}