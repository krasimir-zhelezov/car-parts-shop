import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/components/button/button.component";
import { ModalComponent } from "../../shared/components/modal/modal.component";
import { InputComponent } from "../../shared/components/input/input.component";

@Component({
  selector: 'app-cars',
  imports: [ButtonComponent, ModalComponent, InputComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  isAddCarModalOpen = false;

  openAddCarModal() {
    this.isAddCarModalOpen = true;
  }

  closeAddCarModal() {
    this.isAddCarModalOpen = false;
  }
}
