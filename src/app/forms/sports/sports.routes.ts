import { Routes } from '@angular/router';
import { SportsComponent } from './sports.component';
import { CardDesComponent } from 'src/app/components/card/card-des/card-des.component';


// export const routes: Routes = [
//   { path: '', redirectTo: '/sports', pathMatch: 'full' },
//   { path: 'sports', component: SportsComponent }
// ];

export const routes: Routes = [
  { path: '', component: SportsComponent },
  { path: 'card-des/:id', component: CardDesComponent }
];