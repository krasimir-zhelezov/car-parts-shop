import { Component } from '@angular/core';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-dashboard',
  imports: [HlmButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  totalCars: number = 234;
  totalManufacturers: number = 178;
  totalParts: number = 2556;
}
