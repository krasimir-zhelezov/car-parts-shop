import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

interface Car {
  brand: string;
  model: string;
  productionYear: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private baseUrl = `${environment.apiUrl}/cars/`;

  constructor(private http: HttpClient) { }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(`${this.baseUrl}`, car);
  }

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}`);
  }

  // updateCar(id: string, car: Car): Observable<Car> {
  //   return this.http.put<Car>(`${this.apiUrl}/${id}`, car);
  // }

  // deleteCar(id: string): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }

  // getCars(): Observable<Car[]> {
  //   return this.http.get<Car[]>(this.apiUrl);
  // }
}