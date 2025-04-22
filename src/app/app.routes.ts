import { authGuard } from './guards/auth.guard';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: UserLoginComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate : [authGuard]
    },
];
