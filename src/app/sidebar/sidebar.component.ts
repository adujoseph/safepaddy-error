import {Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit} from '@angular/core';
import {Key} from '../_codebit/app.constant';
import {UserUtil} from '../_codebit/services/user-utils';
import {Router} from '@angular/router';

declare var $: any;
//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    // icon: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}


// Menu Items
export const ROUTES: RouteInfo[] = [
    {
        path: 'home',
        title: 'dashboard',
        type: 'link',
        icontype: 'pe-7s-credit'
    },
    {
        path: 'contacts',
        title: 'Contacts',
        type: 'link',
        icontype: 'pe-7s-add-user'

    }, 
    // {
    //     path: 'transaction',
    //     title: 'Transaction',
    //     type: 'link',
    //     icontype: 'pe-7s-credit'
    // },
    {
        path: 'settings',
        title: 'Settings',
        type: 'sub',
        icontype: 'pe-7s-portfolio',
        children: [
            {path: 'billings', title: 'Billing', ab: 'B'},
            {path: 'subscriptions', title: 'Manage Subscription', ab: 'MS'},
            {path: 'cdm', title: 'Custom Distress Message', ab: 'CDM'}
        ]
    },  {
        path: 'refer',
        title: 'Referals',
        type: 'link',
        icontype: 'pe-7s-note2'
    }
    // {
    //     path: '/pages',
    //     title: 'Profile & Settings',
    //     type: 'sub',
    //     icontype: 'pe-7s-credit',
    //     children: [
    //         {path: 'user', title: 'Password', ab:'UP'},
    //         {path: 'login', title: 'Payment Method', ab:'LP'},
    //         {path: 'register', title: 'Generate Invoice', ab:'RP'},
    //         {path: 'lock', title: 'Billing History', ab:'LSP'}
    //     ]
    // }
    // ,{
    //     path: '/forms',
    //     title: 'Forms',
    //     type: 'sub',
    //     icontype: 'pe-7s-note2',
    //     children: [
    //         {path: 'regular', title: 'Regular Forms', ab:'RF'},
    //         {path: 'extended', title: 'Extended Forms', ab:'EF'},
    //         {path: 'validation', title: 'Validation Forms', ab:'VF'},
    //         {path: 'wizard', title: 'Wizard', ab:'W'}
    //     ]
    // },{
    //     path: '/tables',
    //     title: 'Tables',
    //     type: 'sub',
    //     icontype: 'pe-7s-news-paper',
    //     children: [
    //         {path: 'regular', title: 'Regular Tables', ab:'RT'},
    //         {path: 'extended', title: 'Extended Tables', ab:'ET'},
    //         {path: 'datatables.net', title: 'Datatables.net', ab:'DT'}
    //     ]
    // }, {
    //     path: '/calendar',
    //     title: 'Password Reset',
    //     type: 'link',
    //     icontype: 'pe-7s-key'
    //  },{
    //     path: '/pages/user',
    //     title: 'Edit Profile',
    //     type: 'link',
    //     icontype: 'pe-7s-date'
    // },

];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {
    public menuItems: any[];
    public util: UserUtil = new UserUtil();

    constructor( private router: Router){

    }

    goToSupport() {
        alert('redirecting')
        this.router.navigate(['./support']);
    }

    isNotMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }

    ngOnInit() {
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        this.menuItems = ROUTES.filter(menuItem => menuItem);

        isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
            $('html').addClass('perfect-scrollbar-on');
        } else {
            $('html').addClass('perfect-scrollbar-off');
        }

    }

    ngAfterViewInit() {
        var $sidebarParent = $('.sidebar .nav > li.active .collapse li.active > a').parent().parent().parent();

        var collapseId = $sidebarParent.siblings('a').attr("href");

        $(collapseId).collapse("show");
    }


}
