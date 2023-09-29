import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Routes } from '@angular/router';
import { SportsComponent } from './forms/sports/sports.component';

import { GroceriesComponent } from './forms/groceries/groceries.component';
import { CardDesComponent } from './components/card/card-des/card-des.component';

import { PageNotFoundComponent } from './forms/page-not-found/page-not-found.component';
import { authGuard } from './auth/auth.constants';

export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'sports', component : SportsComponent},
   { path: 'sports', loadComponent: () => import('./forms/sports/sports.component').then(m => m.SportsComponent) },
  {
    path : 'sports/card-des/:id', component: CardDesComponent
  },

  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'groceries',canActivate: [authGuard], component : GroceriesComponent},
  { path: 'groceries', loadComponent: () => import('./forms/groceries/groceries.component').then(m => m.GroceriesComponent) },
  {
    path : 'groceries/card-des/:id', component: CardDesComponent
  },

  { path: 'home', loadComponent: () => import('./forms/home/home.component').then(m => m.HomeComponent) }
  ,
  { path: '**', component: PageNotFoundComponent },
  
  
  // {path: 'sports', loadChildren: () => import('./forms/sports/sports.routes').then(m => m.routes)},
  // {path: 'groceries', loadChildren: () => import('./forms/groceries/groceries.routes').then(m => m.routes)}




];



export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),
   ]
 
};
