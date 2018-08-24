import {Routes} from '@angular/router';
import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import {UserLayoutComponent} from './layouts/user/user-layout.component';
import {AdminLoginLayoutComponent} from './layouts/adminlogin/admin-login-layout.component';
// import {AdminLoginModule} from "./admin-login/Admin-login.module";

export const AppRoutes: Routes = [{
    path: '',
    redirectTo: 'confirmRegistration',
    pathMatch: 'full',
},

{
    path: 'admin-login',
    component: AdminLoginLayoutComponent,
    children: [{
        path: '',
        loadChildren: './admin-login/Admin-login.module#AdminLoginModule'
    }],
},

/*
{
        path: 'sys-admin',
        component: AdminLayoutComponent,
        children: [{
            path: '',
            loadChildren: './admin-dashboard/dashboard.module#DashboardModule'
        }, {
            path: 'customers',
            loadChildren: './admin-manage-customer/manageCustomer.module#ManageCustomerModule'
        }, {
            path: 'audit',
            loadChildren: './admin-audit-acct/audit.module#auditModule'
        }, {
            path: 'staff',
            loadChildren: './admin-manage-staff/staff.module#staffModule'
        }, {
            path: 'transact',
            loadChildren: './admin-transaction-log/transact.module#transactModule'
        }, {
            path: 'distress',
            loadChildren: './admin-distress/distress.module#distressModule'
        }, {
            path: 'distress-alerts',
            loadChildren: './admin-distress-alerts/distress-alerts.module#DistressAlertsModule'
        },


            {
                path: 'forms',
                loadChildren: './forms/forms.module#Forms'
            }, {
                path: 'maps',
                loadChildren: './maps/maps.module#MapsModule'
            }, {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            }, {
                path: 'calendar',
                loadChildren: './calendar/calendar.module#CalendarModule'
            }, {
                path: '',
                loadChildren: './userpage/user.module#UserModule'
            }]
     },

*/


/*
    // User Routes Here
    {
        path: 'safeuser',
        component: UserLayoutComponent,
        children: [
            {
                path: 'home',
                loadChildren: './user-dashboard/dashboard.module#DashboardModule'
            }, {
                path: 'contacts',
                loadChildren: './user-contacts/contacts.module#ContactsModule'
            }, {
                path: 'settings',
                loadChildren: './user-setting/user-setting.module#UserSettingModule'
            },
            {
                path: 'transaction',
                loadChildren: './user-transaction/transaction.module#TransactionModule'
            }, {
                path: 'profile',
                loadChildren: './userpage/user.module#UserModule'
            }, {
                path: 'password',
                loadChildren: './PasswordReset/password.module#passwordModule'
            }, {
                path: 'customdis',
                loadChildren: './user-custom-distress-message/customdis.module#CustomDistressModule'
            },  {
                path: 'refer',
                loadChildren: './user-referrals/refer.module#ReferModule'

            },
            {
                path: 'forms',
                loadChildren: './forms/forms.module#Forms'
            }, {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            }, {
                path: 'maps',
                loadChildren: './maps/maps.module#MapsModule'
            }, {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            }, {
                path: 'calendar',
                loadChildren: './calendar/calendar.module#CalendarModule'
            }, {
                path: '',
                loadChildren: './user-dashboard/dashboard.module#DashboardModule'
            }
        ]
    },

*/
    // pages route here
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'confirmRegistration',
                loadChildren: './confirmRegistration/confirmreg.module#ConfirmRegistrationModule'
            }
        /*
        {
            path: 'pages',
            loadChildren: './pages/pages.module#PagesModule'
        }, {
            path: 'about',
            loadChildren: './about/about.module#AboutModule'
        }, {
            path: 'contact',
            loadChildren: './contact/contact.module#ContactModule'
        }, {
            path: 'support',
            loadChildren: './support/support.module#SupportModule'
        }, {
            path: 'how',
            loadChildren: './how-it-works/howitworks.module#HowItWorksModule'
        }, {
            path: 'services',
            loadChildren: './services/services.module#ServicesModule'
        }, {
            path: 'terms',
            loadChildren: './terms/terms.module#TermsModule'
        }, {
            path: 'privacy',
            loadChildren: './privacy/privacy.module#PrivacyModule'
        }, {
            path: 'thanks',
            loadChildren: './thankyou/thankyou.module#ThankYouModule'
        },  {
            path: 'thankyou',
            loadChildren: './thankyousub/thankyousub.module#ThankYouSubModule'
        },  {
            path: 'resetpassword',
            loadChildren: './resetpassword/resetpassword.module#ResetPasswordModule'
        },  {
            path: 'confirmRegistration',
            loadChildren: './confirmRegistration/confirmreg.module#ConfirmRegistrationModule'
        }, {
            path: 'index',
            loadChildren: './index/index.module#IndexModule'
        },  {
            path: 'home',
            loadChildren: './home/home.module#HomeModule'
        }
    */
    ]
    }
];

