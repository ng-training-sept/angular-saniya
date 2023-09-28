import { Routes } from '@angular/router';
import { GroceriesComponent } from './groceries.component';
import { CardDesComponent } from 'src/app/components/card/card-des/card-des.component';


export const routes: Routes = [
//   { path: '', redirectTo: '/groceries', pathMatch: 'full' },
//   { path: 'groceries', component: GroceriesComponent }

    { path: '', component: GroceriesComponent },
    { path: 'card-des/:id', component: CardDesComponent}
];