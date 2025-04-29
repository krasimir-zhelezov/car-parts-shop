import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarListComponent } from './car-list/car-list.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, data: { isDashboard: true },
        children: [
            { path: 'cars', component: CarListComponent }
        ]
     }
];
