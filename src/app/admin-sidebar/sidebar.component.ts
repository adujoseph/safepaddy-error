import {Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit} from '@angular/core';

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

//Menu Items
export const ROUTES: RouteInfo[] = [
    {
        path: 'dashboard',
        title: 'dashboard',
        type: 'link',
        icontype: 'pe-7s-credit'
    },
    {
        path: 'distress-alerts',
        title: 'Distress Alerts',
        type: 'link',
        icontype: 'pe-7s-add-user'

    },
    {
        path: 'customers',
        title: 'Manage Customers',
        type: 'link',
        icontype: 'pe-7s-add-user'

    },{
        path: 'staff',
        title: 'Manage Staff',
        type: 'link',
        icontype: 'pe-7s-add-user'

    }
    , {
        path: 'distress',
        title: 'Distress Category Management',
        type: 'link',
        icontype: 'pe-7s-credit'
    }, {
        path: 'audit',
        title: 'Audit and Account',
        type: 'link',
        icontype: 'pe-7s-credit'
    }, {
        path: 'transact',
        title: 'Transactions logs',
        type: 'link',
        icontype: 'pe-7s-credit'
    },
    // {
    //     path: 'settings',
    //     title: 'Audit and Account',//Profile and Settings
    //     type: 'sub',
    //     icontype: 'pe-7s-portfolio',
    //     children: [
    //         {path: 'billings', title: 'Billing', ab: 'B'},
    //         {path: 'grid', title: 'Manage Subcription', ab: 'MS'},
    //         {path: 'panels', title: 'Generate Invoice', ab: 'GI'},
    //         {path: 'sweet-alert', title: 'Custom Distress Message', ab: 'CDM'},
    //         // {path: 'notifications', title: 'Notifications', ab:'N'},
    //         // {path: 'icons', title: 'Icons', ab:'I'},
    //         // {path: 'typography', title: 'Typography', ab:'T'}
    //     ]
    // },

];

//END SIDEBAR MENU HERE...
@Component({
    moduleId: module.id,
    selector: 'admin-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class AdminSidebarComponent {
    public menuItems: any[];

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
