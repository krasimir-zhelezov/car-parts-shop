import { Component } from '@angular/core';
import { InputComponent } from '../shared/components/input/input.component';
import { ButtonComponent } from "../shared/components/button/button.component";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
  imports: [InputComponent, ButtonComponent]
})
export class ShopComponent {
  brands = ['brand1', 'brand2', 'brand3']

  selectedBrand: string = '';

  onBrandSelected(brand: string) {
    this.selectedBrand = brand;
  }
}
