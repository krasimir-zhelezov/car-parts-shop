import { NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { Car } from '../../../models/car.model';
import { CarsService } from '../../../dashboard/cars/cars.service';

@Component({
  selector: 'ui-car-select',
  imports: [FormsModule, NgFor, NgIf, InputComponent],
  templateUrl: './car-select.component.html',
  styleUrl: './car-select.component.css'
})
export class CarSelectComponent {
  cars: Car[] = [];
  carData: {[brand: string]: string[]} = {};
  
  brandSearch = '';
  modelSearch = '';
  selectedBrand: string | null = null;
  filteredBrands: string[] = [];
  filteredModels: string[] = [];
  selectedCars: Car[] = [];
  showSupportedCars = false;

  constructor(private carsService: CarsService) {}

  ngOnInit() {
    this.getAllCars();
  }

  getAllCars() {
    this.carsService.getAllCars().subscribe({
      next: (cars) => {
        this.cars = cars;
        this.processCarData();
        this.filteredBrands = Object.keys(this.carData);
      },
      error: (err) => {
        console.error('Error fetching cars:', err);
        // Fallback to default data if API fails
        this.carData = {
          'Toyota': ['Corolla', 'Camry', 'Rav4', 'Prius'],
          'Honda': ['Civic', 'Accord', 'CR-V', 'Pilot'],
          'Ford': ['F-150', 'Mustang', 'Explorer', 'Focus'],
          'BMW': ['3 Series', '5 Series', 'X5', 'X3'],
        };
        this.filteredBrands = Object.keys(this.carData);
      }
    });
  }

  private processCarData() {
    // Process the API response to create the carData structure
    this.carData = {};
    
    this.cars.forEach(car => {
      if (!this.carData[car.brand]) {
        this.carData[car.brand] = [];
      }
      if (!this.carData[car.brand].includes(car.model)) {
        this.carData[car.brand].push(car.model);
      }
    });
  }

  filterBrands() {
    this.filteredBrands = Object.keys(this.carData).filter(brand =>
      brand.toLowerCase().includes(this.brandSearch.toLowerCase())
    );
  }

  selectBrand(brand: string) {
    this.selectedBrand = brand;
    this.brandSearch = brand;
    this.filteredBrands = [];
    this.filteredModels = this.carData[brand] || [];
    this.modelSearch = '';
  }

  filterModels() {
    if (this.selectedBrand) {
      this.filteredModels = (this.carData[this.selectedBrand] || []).filter(model =>
        model.toLowerCase().includes(this.modelSearch.toLowerCase())
      );
    }
  }

  selectModel(model: string) {
  if (this.selectedBrand) {
    const newCar: Car = { 
      brand: this.selectedBrand, 
      model,
      productionYear: 0 // or some default value
    };
    if (!this.selectedCars.some(car => 
      car.brand === newCar.brand && car.model === newCar.model
    )) {
      this.selectedCars.push(newCar);
    }
    this.modelSearch = '';
    this.filteredModels = [];
  }
}
  removeCar(carToRemove: Car) {
    this.selectedCars = this.selectedCars.filter(car => 
      !(car.brand === carToRemove.brand && car.model === carToRemove.model)
    );
  }
}
