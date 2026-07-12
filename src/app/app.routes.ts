import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Contact } from './contact/contact';
import { About } from './about/about';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: About
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'about',
        component: About
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
