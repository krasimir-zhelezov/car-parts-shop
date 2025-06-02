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
}
