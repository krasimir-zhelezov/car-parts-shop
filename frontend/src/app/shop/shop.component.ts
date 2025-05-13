import { Component } from '@angular/core';
import { InputComponent } from '../shared/components/input/input.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
  imports: [InputComponent]
})
export class ShopComponent {
  brands = ['brand1', 'brand2', 'brand3']

  selectedBrand: string = '';

  onBrandSelected(brand: string) {
    this.selectedBrand = brand;
  }
}
