import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Part } from '../../models/part.model';

@Injectable({
  providedIn: 'root'
})
export class PartsService {

  private baseUrl = `${environment.apiUrl}/parts/`;

  constructor(private http: HttpClient) { }

  getAllParts(): Observable<Part[]> {
    return this.http.get<Part[]>(this.baseUrl);
  }

  addPart(part: Part): Observable<Part> {
    return this.http.post<Part>(this.baseUrl, part);
  }

  deletePart(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + id)
  }

  getPartById(id: string): Observable<Part> {
    return this.http.get<Part>(this.baseUrl + id);
  }

  editPart(part: Part): Observable<Part> {
    return this.http.put<Part>(this.baseUrl + part.id, part);
  }

  addSupportedCar(partId: string, carId: string): Observable<Part> {
    return this.http.patch<Part>(`${this.baseUrl}${partId}/addSupportedCar/${carId}`, {});
  }

  removeSupportedCar(partId: string, carId: string): Observable<Part> {
    return this.http.patch<Part>(`${this.baseUrl}${partId}/removeSupportedCar/${carId}`, {});
  }
}
