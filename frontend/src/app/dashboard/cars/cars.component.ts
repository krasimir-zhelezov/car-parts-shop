import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/components/button/button.component";
import { ModalComponent } from "../../shared/components/modal/modal.component";
import { InputComponent } from "../../shared/components/input/input.component";
import { FormsModule } from '@angular/forms';
import { CarsService } from './cars.service';
import { AlertService } from '../../shared/components/alert/alert.service';

@Component({
  //standalone: true,
  selector: 'app-cars',
  imports: [ButtonComponent, ModalComponent, InputComponent, FormsModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  newCarBrand = '';
  newCarModel = '';
  newCarProductionYear = 2025;
  isAddCarModalOpen = false;

  constructor(private carsService: CarsService, private alertService: AlertService) {}

  openAddCarModal() {
    this.isAddCarModalOpen = true;
  }

  closeAddCarModal() {
    this.isAddCarModalOpen = false;
  }

  addCar() {
    const newCar = {
      brand: this.newCarBrand,
      model: this.newCarModel,
      productionYear: this.newCarProductionYear
    }
    
    this.carsService.addCar(newCar).subscribe({
      next: () => {
        this.alertService.addAlert({
          type: 'success',
          message: 'Car added succesfully.',
          duration: 5000 // auto-close after 5 seconds
        });

        this.closeAddCarModal()
        // TODO: refresh the car list
      },
      error: (err) => {
        this.alertService.addAlert({
          type: 'error',
          message: 'Failed to add car: ' + err,
          duration: 20000
        });
      }
    });
  }
}
