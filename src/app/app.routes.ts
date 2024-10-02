import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./home/home.component').then( m => m.HomeComponent)
        
    },
    {
        path:'login', 
        loadComponent: () => import('./login/login.component').then( m => m.LoginComponent)
    },
    {
        path:'register', 
        loadComponent: () => import('./register/register.component').then( m => m.RegisterComponent)
    },
    {
        path:'user/:username', 
        loadComponent: () => import('./user-post/user-post.component').then( m => m.UserPostComponent)
    },
    {
        path:'validate-email/:jwt', 
        loadComponent: () => import('./validate-email/validate-email.component').then( m => m.ValidateEmailComponent)
    },
];
