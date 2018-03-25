import { LoginComponent } from './login/login.component';

export const App_ROUTE = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'pages', loadChildren: './pages/pages.module#PagesModule'}
];
