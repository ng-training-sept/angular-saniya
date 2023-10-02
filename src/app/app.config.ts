import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Routes } from '@angular/router';


import { PageNotFoundComponent } from './forms/page-not-found/page-not-found.component';
import { authGuard } from './auth/auth.constants';

export const routes: Routes = [
  
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'sports', loadChildren: () => import('./forms/sports/sports.routes').then(m => m.routes) },
    {
      path: 'groceries',
      loadChildren: () => import('./forms/groceries/groceries.routes').then(m => m.routes),
      
    },
  
    { path: 'home', loadComponent: () => import('./forms/home/home.component').then(m => m.HomeComponent) }
    ,
    { path: '**', component: PageNotFoundComponent },
  
  
  // {path: 'sports', loadChildren: () => import('./forms/sports/sports.routes').then(m => m.routes)},
  // {path: 'groceries', loadChildren: () => import('./forms/groceries/groceries.routes').then(m => m.routes)}
  
  
  // {path: 'sports', loadChildren: () => import('./forms/sports/sports.routes').then(m => m.routes)},
  // {path: 'groceries', loadChildren: () => import('./forms/groceries/groceries.routes').then(m => m.routes)}



];



export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),
   ]
 
};
