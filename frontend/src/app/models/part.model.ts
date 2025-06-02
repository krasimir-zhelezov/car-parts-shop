import { Car } from "./car.model";

export interface Part {
  name: string;
  code: string;
  category: string;
  supportedCars?: Car[];
  buyPrice: number;
  sellPrice: number;
}