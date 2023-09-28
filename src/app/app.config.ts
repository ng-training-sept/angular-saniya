import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Routes } from '@angular/router';
import { SportsComponent } from './forms/sports/sports.component';

import { GroceriesComponent } from './forms/groceries/groceries.component';
import { CardDesComponent } from './components/card/card-des/card-des.component';

export const routes: Routes = [
  { path: '', redirectTo: '/sports', pathMatch: 'full' },
  { path: 'sports', component : SportsComponent},
   { path: 'sports', loadComponent: () => import('./forms/sports/sports.component').then(m => m.SportsComponent) },
  {
    path : 'sports/card-des/:id', component: CardDesComponent
  },

  { path: '', redirectTo: '/groceries', pathMatch: 'full' },
  { path: 'groceries', component : GroceriesComponent},
   { path: 'groceries', loadComponent: () => import('./forms/groceries/groceries.component').then(m => m.GroceriesComponent) },
  {
    path : 'groceries/card-des/:id', component: CardDesComponent
  },

  {path: '', redirectTo: '/sports', pathMatch: 'full'},
  {path: 'sports', loadChildren: () => import('./forms/sports/sports.routes').then(m => m.routes)},
  {path: 'groceries', loadChildren: () => import('./forms/groceries/groceries.routes').then(m => m.routes)}


];



export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),
   ]
 
};
