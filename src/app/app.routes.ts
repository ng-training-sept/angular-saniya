import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.constants';

export const routes: Routes = [
        {path: '', redirectTo: 'sports', pathMatch: 'full'},
        {path: 'sports', loadChildren: () => import('./forms/sports/sports.routes').then(m => m.routes)},
        {
          path: 'groceries',
          canActivate: [authGuard],
          loadChildren: () => import('./forms/groceries/groceries.routes').then(m => m.routes)
        }
      ];
    