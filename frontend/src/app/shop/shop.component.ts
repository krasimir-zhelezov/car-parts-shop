import { Component } from '@angular/core';
import { InputComponent } from '../shared/components/input/input.component';
import { ButtonComponent } from "../shared/components/button/button.component";
import { DropdownComponent } from "../shared/components/dropdown/dropdown.component";
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
  imports: [InputComponent, ButtonComponent, DropdownComponent]
})
export class ShopComponent {
  partCategories = [
    { label: 'All', value: ''},
    { label: 'Engine', value: 'engine' },
    { label: 'Tires', value: 'tires' },
    { label: 'Exhaust', value: 'exhaust' },
    { label: 'Suspension', value: 'suspension' },
    { label: 'Brakes', value: 'brakes' }
  ];

  carBrand: string = '';
  carModel: string = '';

  constructor(private shopService: ShopService) { }

  searchForCar() {
    this.shopService.searchForBrand(this.carBrand).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.error('Error fetching cars', error),
    });
  }
}
