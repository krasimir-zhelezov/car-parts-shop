import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  searchForBrand(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/cars/search/brand/${query}`)
  }
}
