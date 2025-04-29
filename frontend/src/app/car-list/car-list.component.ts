import { Component } from '@angular/core';
import { Car } from '../models/car.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-car-list',
  imports: [NgFor],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {
  cars: Car[] = [
      {
          brand: "Toyota",
          model: "Camry",
          productionYear: 2022
      },
      {
          brand: "Honda",
          model: "Civic",
          productionYear: 2021
      },
      {
          brand: "Ford",
          model: "Mustang",
          productionYear: 2020
      },
      {
          brand: "Tesla",
          model: "Model 3",
          productionYear: 2023
      },
      {
          brand: "BMW",
          model: "X5",
          productionYear: 2019
      },
      {
          brand: "Mercedes-Benz",
          model: "C-Class",
          productionYear: 2022
      },
      {
          brand: "Audi",
          model: "A4",
          productionYear: 2021
      },
      {
          brand: "Volkswagen",
          model: "Golf",
          productionYear: 2020
      }
  ];
}
