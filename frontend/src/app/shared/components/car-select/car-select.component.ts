import { PartsService } from './../../../dashboard/parts/parts.service';
import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, NgModule, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, FormsModule, NG_VALUE_ACCESSOR, NgModel, Validators } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { Car } from '../../../models/car.model';
import { CarsService } from '../../../dashboard/cars/cars.service';
import { Part } from '../../../models/part.model';
import { Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'ui-car-select',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './car-select.component.html',
  styleUrl: './car-select.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CarSelectComponent),
      multi: true
    }
  ]
})
export class CarSelectComponent implements ControlValueAccessor, OnInit {
  @Input() partId: string = '';
  cars?: Car[];
  supportedCars?: Car[] = [];
  part?: Part;

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(
    private carsService: CarsService,
    private partsService: PartsService,
  ) { }

  selectCar(carId: string) {
    this.partsService.addSupportedCar(this.partId, carId).subscribe({
      next: (part) => {
        this.part = part;
      }
    })
  }

  removeSupportedCar(carId: string) {
    this.partsService.removeSupportedCar(this.partId, carId).subscribe({
      
    })
  }

  // getSupportedCars(): Car[] | undefined {
  //   return this.part?.supportedCars;
  // }

  loadCars() {
    this.carsService.getAllCars().subscribe({
      next: (cars) => {
        this.cars = cars;
      }
    })
  }

  loadPart() {
    this.partsService.getPartById(this.partId).subscribe({
      next: (part) => {
        this.part = part;
        this.supportedCars = part.supportedCars;

        console.log(this.supportedCars);
      }
    })
  }

  ngOnInit() {
    this.loadCars();
    // this.loadPart();

    // console.log(this.supportedCars);
  }

  writeValue(value: string): void {
    this.partId = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implement if needed
  }

  // Update model when value changes
  updateValue(value: string) {
    this.partId = value;
    this.onChange(value);
    this.onTouched();
  }

  //##########//
  // DEEPSEEK //
  //##########//

  selectedBrand: string | null = null;
  selectedCarId: string | null = null;

  // Get unique brands from cars list
  getUniqueBrands(): string[] {
    const brands = new Set(this.cars?.map(car => car.brand));
    return Array.from(brands).sort();
  }

  // Filter models by selected brand
  getModelsByBrand(): Car[] {
    return this.cars?.filter(car => car.brand === this.selectedBrand) || [];
  }

  // When brand is selected
  filterModelsByBrand(event: Event) {
    this.selectedBrand = (event.target as HTMLSelectElement).value;
    this.selectedCarId = null;
  }

  // When model is selected
  onModelSelect(event: Event) {
    this.selectedCarId = (event.target as HTMLSelectElement).value;
    if (this.selectedCarId) {
      this.selectCar(this.selectedCarId);
    }
  }

  getAvailableBrands(): string[] {
  const allBrands = new Set(this.cars?.map(car => car.brand));
  const supportedBrands = new Set(this.supportedCars?.map(car => car.brand));
  
  // Only show brands that have at least one unsupported model
  return Array.from(allBrands).filter(brand => {
    const allModelsForBrand = this.cars?.filter(c => c.brand === brand) || [];
    const supportedModelsForBrand = this.supportedCars?.filter(c => c.brand === brand) || [];
    return allModelsForBrand.length > supportedModelsForBrand.length;
  }).sort();
}

// Get models for selected brand that aren't already supported
getAvailableModels(): Car[] {
  if (!this.selectedBrand) return [];
  
  const allModels = this.cars?.filter(car => car.brand === this.selectedBrand) || [];
  const supportedModels = this.supportedCars?.filter(car => car.brand === this.selectedBrand) || [];
  
  // Only return models that aren't already supported
  return allModels.filter(model => 
    !supportedModels.some(supported => supported.id === model.id)
  );
}

// Check if a car is already supported
isCarSupported(carId: string | undefined): boolean {
  if (!carId) return false;
  return this.supportedCars?.some(car => car.id === carId) || false;
}
}
