import { Car } from "./car.model";

export interface Part {
  id?: string;
  name: string;
  code: string;
  category: string;
  supportedCars?: Car[];
  buyPrice: number;
  sellPrice: number;
}