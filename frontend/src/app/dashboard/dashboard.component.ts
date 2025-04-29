import { Component } from '@angular/core';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [HlmButtonModule, RouterOutlet, NgIf],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  totalCars: number = 234;
  totalManufacturers: number = 178;
  totalParts: number = 2556;

  get isDashboardRoute() {
    return this.route.snapshot.data?.['isDashboard'] || 
         this.route.snapshot.firstChild?.data?.['isDashboard'];
  }

  constructor(private route: ActivatedRoute) {}
}
