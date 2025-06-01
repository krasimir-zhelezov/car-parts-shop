import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarsComponent } from './dashboard/cars/cars.component';
import { PartsComponent } from './dashboard/parts/parts.component';

export const routes: Routes = [
    { path: "", component: ShopComponent },
    { path: "dashboard", component: DashboardComponent, children: [
        { path: "cars", component: CarsComponent },
        { path: "parts", component: PartsComponent }
    ] }
];
